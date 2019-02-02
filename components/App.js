import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Main, Menu, Panel, Stations, Settings, Splash } from './index';
import { READY, WORKING, BREAK, MANUAL_START_AFTER_BREAK } from '../constants';
import { fetchSongsByMoodStation, fetchVideoId } from '../utils';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { settings } = props;
    const { workPeriod } = settings;

    this.state = {
      videoIds: [],
      activeStation: props.moodStation,
      status: READY,
      count: 0,
      curTime: workPeriod,
      isStationsOpen: false,
      isSettingsOpen: false,
      isLoading: false,
      isPlayerReady: false,
      hideLoadingCover: false,
    };
  }

  async componentDidMount() {
    /* eslint-disable */
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-132387945-1');
    /* eslint-enable */

    // Setting up Youtube iframe
    window.onYouTubePlayerAPIReady = async () => {
      console.log('>>> ready.');
      const { access_token } = this.props;
      const id = localStorage.getItem('moodStationId');

      const moodStation = await fetchSongsByMoodStation(
        access_token,
        id || 'TZZ4fMCHdJNYqHEf-p',
      );
      const videoId = await fetchVideoId(moodStation.songs);

      this.player = new window.YT.Player('player', {
        height: '60',
        width: '100',
        videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });

      this.setState({
        activeStation: moodStation,
        videoIds: [videoId],
        count: 0,
      });
    };

    const { error, privateToken } = this.props;
    const userToken =
      privateToken || window.localStorage.getItem('privateToken');

    if (userToken) {
      // Get user data
      const userRes = await fetch('https://api.kkbox.com/v1.1/me', {
        method: 'get',
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (userRes.status === 200) {
        const { id, name, images } = await userRes.json();
        const user = {
          id,
          name,
          thumb: images[0].url,
        };
        this.setState({ user });
      }

      // Get playlists 自訂列表
      const playlistsRes = await fetch(
        'https://api.kkbox.com/v1.1/me/playlists',
        {
          method: 'get',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      if (playlistsRes.status === 200) {
        const { data } = await playlistsRes.json();
        console.log('playlists ', data);
      }

      window.localStorage.setItem('privateToken', userToken);
    }

    if (error) alert(`Error: ${error}`); // eslint-disable-line
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.player = null;
  }

  onPlayerReady = () => {
    this.setState({ isPlayerReady: true });
  };

  onPlayerStateChange = async (event) => {
    if (event.data === 0) {
      console.log('Player STOP.');
      const { curTime, count, videoIds, activeStation } = this.state;
      const videoId = await fetchVideoId(activeStation.songs.slice(count + 1));
      console.log('Next song: ', videoId);
      this.player.loadVideoById(videoId, 0, 'small');
      this.setState({
        videoIds: [...videoIds, videoId],
        curTime: curTime - 1,
        count: count + 1,
      });
    }
  };

  covertSecToMinSec = (curTime) => {
    const min = Math.floor(curTime / 60);
    const sec = curTime % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  handleStart = () => {
    if (this.player) {
      this.player.playVideo();
      this.player.setVolume(100);
      console.log('Player Start. Working Timer Start.');
      this.timer = setInterval(this.handleCountDownWorkTime, 1000);
      this.setState({ status: WORKING });
    }
  };

  handleCountDownWorkTime = async () => {
    const {
      settings: { breakPeriod, firstBeepTime },
    } = this.props;
    const { curTime } = this.state;

    if (curTime > 0) {
      this.setState({ curTime: curTime - 1 });

      if (curTime === firstBeepTime) {
        console.log('Last 1 min.', curTime);
        this.ringing();
      } else if (curTime < 5) {
        this.player.setVolume(curTime * 10);
      }
    } else {
      console.log('Take a break.');
      this.player.pauseVideo();
      this.ringing();
      clearInterval(this.timer);
      this.setState({ status: BREAK, curTime: breakPeriod });
      this.timer = setInterval(this.handleCountDownBreakTime, 1000);
    }
  };

  handleCountDownBreakTime = () => {
    const {
      settings: { workPeriod, mode },
    } = this.props;
    const { curTime } = this.state;

    if (curTime > 0) {
      this.setState({ curTime: curTime - 1 });
    } else {
      console.log('Break is Over.');
      clearInterval(this.timer);
      this.ringing();
      if (mode === MANUAL_START_AFTER_BREAK) {
        this.setState({ status: READY, curTime: workPeriod });
      } else {
        this.player.playVideo();
        this.player.setVolume(100);
        console.log('Working Timer Start.');
        this.timer = setInterval(this.handleCountDownWorkTime, 1000);
        this.setState({ status: WORKING, curTime: workPeriod });
      }
    }
  };

  changeActiveStation = async (id) => {
    const { access_token } = this.props;
    const { status } = this.state;
    this.setState({ isLoading: true });

    const moodStation = await fetchSongsByMoodStation(access_token, id);
    localStorage.setItem('moodStationId', id);

    const videoId = await fetchVideoId(moodStation.songs);
    this.player.loadVideoById(videoId, 0, 'small');
    if (status !== WORKING) {
      this.player.stopVideo();
    }
    this.setState({
      isStationsOpen: false,
      isLoading: false,
      activeStation: moodStation,
      count: 0,
      videoIds: [videoId],
    });
  };

  changeToFavorite = async () => {
    const { privateToken } = this.props;
    const { status } = this.state;
    this.setState({ isLoading: true });
    const userToken =
      privateToken || window.localStorage.getItem('privateToken');
    // Get favorite 收藏歌曲
    const favoriteRes = await fetch('https://api.kkbox.com/v1.1/me/favorite', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (favoriteRes.status === 200) {
      const { data } = await favoriteRes.json();
      const activeStation = {
        mood: 'Favorite',
        songs: data.map(ele => ({
          name: ele.name,
          artist: ele.album.artist.name,
          album: ele.album.name,
        })),
        image: {},
      };

      const videoId = await fetchVideoId(activeStation.songs);
      this.player.loadVideoById(videoId, 0, 'small');
      if (status !== WORKING) {
        this.player.stopVideo();
      }
      this.setState({
        isStationsOpen: false,
        isLoading: false,
        count: 0,
        videoIds: [videoId],
        activeStation,
      });
    }
  };

  ringing = () => {
    /* iOS does not allowe auotplay sound, unless the user touch start */
    const audioElement = document.querySelector('audio');
    audioElement.play();
  };

  computePercent = (curTime) => {
    const {
      settings: { workPeriod, breakPeriod },
    } = this.props;
    const { status } = this.state;
    if (status === WORKING) {
      return 180 - Math.floor(170 * ((workPeriod - curTime) / workPeriod));
    }
    return Math.floor(170 * ((breakPeriod - curTime) / breakPeriod)) + 10;
  };

  handleSaveSettings = (settings) => {
    const { workPeriod } = settings;
    const { handleSaveSettings, videoIds } = this.props;
    // Reset current time and initialize timer
    this.setState({
      videoIds,
      status: READY,
      count: 0,
      curTime: workPeriod,
      isStationsOpen: false,
      isSettingsOpen: false,
      isLoading: false,
    });
    this.player.stopVideo();
    clearInterval(this.timer);
    handleSaveSettings(settings);
  };

  render() {
    const { moodStations, settings } = this.props;
    const {
      user,
      activeStation,
      curTime,
      status,
      isStationsOpen,
      isSettingsOpen,
      isLoading,
      isPlayerReady,
      hideLoadingCover,
    } = this.state;

    return (
      <div>
        {!hideLoadingCover && (
          <div
            className="loading-cover"
            style={{ opacity: isPlayerReady ? 0 : 1 }}
            onTransitionEnd={() => {
              this.setState({ hideLoadingCover: true });
            }}
          >
            <Splash />
          </div>
        )}
        {/* eslint-disable-next-line */}
        <audio>
          <source kind="captions" src="../static/tone.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Main
          isPlayerReady={isPlayerReady}
          status={status}
          curTime={curTime}
          percent={this.computePercent(curTime)}
          handleStart={this.handleStart}
          covertSecToMinSec={this.covertSecToMinSec}
        />
        <Menu
          user={user}
          activeStation={activeStation}
          handleOpenStations={() => {
            this.setState({ isStationsOpen: true });
          }}
          handleOpenSettings={() => {
            this.setState({ isSettingsOpen: true });
          }}
        />
        <Panel
          isOpen={isStationsOpen}
          handleClosePanel={() => {
            this.setState({ isStationsOpen: false });
          }}
        >
          <Stations
            user={user}
            changeToFavorite={this.changeToFavorite}
            moodStations={moodStations}
            isLoading={isLoading}
            changeActiveStation={this.changeActiveStation}
          />
        </Panel>
        <Panel
          isOpen={isSettingsOpen}
          handleClosePanel={() => {
            this.setState({ isSettingsOpen: false });
          }}
        >
          <Settings
            {...settings}
            handleSaveSettings={this.handleSaveSettings}
          />
        </Panel>
        <div id="player" />
        <div id="cover" />
        <style jsx>
          {`
            .loading-cover {
              position: fixed;
              background-color: #f95f62;
              z-index: 999;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              transition: all 1s ease-in;
            }
            #player,
            #cover {
              position: fixed;
              bottom: 0;
              right: 0;
              margin: 20px;
              box-shadow: 1px 1px 3px 1px #333;
              opacity: 0.2;
              transition: all 0.5s cubic-bezier(0.39, 0.58, 0.57, 1);
            }
            #cover {
              width: 100px;
              height: 60px;
            }
            @media screen and (min-width: 376px) {
              #player:hover {
                width: 335px;
                height: 189px;
                opacity: 1;
              }
              #cover {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
