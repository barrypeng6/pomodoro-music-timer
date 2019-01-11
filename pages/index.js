import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Auth } from '@kkbox/kkbox-js-sdk';
import getConfig from 'next/config';

import { Main, Menu, ListPanel } from '../components';
import { READY, WORKING, BREAK } from '../constants';
import { fetchMoodStations, fetchSongsByMoodStation, beep } from '../utils';

const {
  publicRuntimeConfig: { APP_ID, APP_SECRET, YT_API_KEY },
} = getConfig();

// eslint-disable-next-line
const AUTO_START_AFTER_BREAK = 'AUTO_START_AFTER_BREAK';
const MANUAL_START_AFTER_BREAK = 'MANUAL_START_AFTER_BREAK';
const MODE = MANUAL_START_AFTER_BREAK;

const WORK_TIME = 1500;
const BREAK_TIME = 300;

const FIRST_BEEP_TIME = 60;

const fetchVideoId = async (songs) => {
  let count = 0;
  let videoId;
  while (videoId == null) {
    const searchStr = `${songs[count].name.replace(/\s+/g, '+')}+${songs[
      count
    ].artist.replace(/\s+/g, '+')}`;
    // eslint-disable-next-line no-await-in-loop
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=${encodeURIComponent(
        searchStr,
      )}&type=video&key=${YT_API_KEY}`,
    );
    // eslint-disable-next-line no-await-in-loop
    const data = await res.json();
    // eslint-disable-next-line prefer-destructuring
    if (data.items.length > 0) videoId = data.items[0].id.videoId;

    console.log('==>', data, searchStr);
    count = count + 1;
  }
  return videoId;
};

const getAccessToken = async (code) => {
  if (code) {
    const codeRes = await fetch('https://account.kkbox.com/oauth2/token', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${code}&client_id=${APP_ID}&client_secret=${APP_SECRET}`,
    });

    const { access_token: privateToken, error } = await codeRes.json();
    if (error) {
      const auth = new Auth(APP_ID, APP_SECRET);
      const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
      const { access_token: publicToken } = authResponse.data;
      return { publicToken, error };
    }
    return { privateToken };
  }
  const auth = new Auth(APP_ID, APP_SECRET);
  const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
  const { access_token: publicToken } = authResponse.data;
  return { publicToken };
};

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      const { code = null } = query;
      const { publicToken, privateToken, error } = await getAccessToken(code);

      const access_token = privateToken || publicToken;
      if (access_token) {
        const { data: moodStations } = await fetchMoodStations(access_token);
        return {
          moodStations,
          access_token,
          privateToken,
        };
      }
      return { error };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      videoIds: props.videoIds,
      activeStation: props.moodStation,
      status: READY,
      count: 0,
      curTime: WORK_TIME,
      isOpen: false,
      isLoading: false,
      isPlayerReady: true,
    };
  }

  async componentDidMount() {
    // Setting up Youtube iframe
    window.onYouTubePlayerAPIReady = async () => {
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
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });

      this.setState({ activeStation: moodStation, videoIds: [videoId] });
    };

    const { error, privateToken } = this.props;
    const userToken = privateToken || window.localStorage.getItem('privateToken');
    // Get user data
    if (userToken) {
      const userRes = await fetch('https://api.kkbox.com/v1.1/me', {
        method: 'get',
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(userRes);
      if (userRes.status === 200) {
        const { id, name, images } = await userRes.json();
        const user = {
          id,
          name,
          thumb: images[0].url,
        };
        this.setState({ user });
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
    console.log('ready');
    this.setState({ isPlayerReady: true });
  };

  onPlayerStateChange = (event) => {
    if (event.data === 0) {
      const { count, videoIds } = this.state;
      this.player.loadVideoById(videoIds[count + 1], 0, 'small');
      this.setState({ count: count + 1 });
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
      this.timer = setInterval(this.handleCountDownWorkTime, 1000);
      this.setState({ status: WORKING });
    }
  };

  handleCountDownWorkTime = async () => {
    const { activeStation, curTime, count, videoIds } = this.state;
    if (curTime > 0) {
      if (
        Math.floor(this.player.getDuration() - this.player.getCurrentTime()) ===
        30
      ) {
        const videoId = await fetchVideoId(
          activeStation.songs.slice(count + 1),
        );
        this.setState({
          videoIds: [...videoIds, videoId],
          curTime: curTime - 1,
        });
      } else {
        this.setState({ curTime: curTime - 1 });
      }

      if (curTime === FIRST_BEEP_TIME) beep(3);
      if (curTime === 0) beep(5);
    } else {
      this.player.stopVideo();
      clearInterval(this.timer);
      this.setState({ status: BREAK, curTime: BREAK_TIME });
      this.timer = setInterval(this.handleCountDownBreakTime, 1000);
    }
  };

  handleCountDownBreakTime = () => {
    const { curTime, count, videoIds } = this.state;
    if (curTime > 0) {
      this.setState({ curTime: curTime - 1 });
    } else {
      clearInterval(this.timer);
      this.player.loadVideoById(videoIds[count + 1], 0, 'small');
      this.player.stopVideo();
      if (MODE === MANUAL_START_AFTER_BREAK) {
        this.setState({ status: READY, curTime: WORK_TIME });
      } else {
        this.player.playVideo();
        this.timer = setInterval(this.handleCountDownWorkTime, 1000);
        this.setState({ status: WORKING, curTime: WORK_TIME });
      }
    }
  };

  changeActiveStation = async (id) => {
    const { access_token } = this.props;
    clearInterval(this.timer);
    this.setState({ isLoading: true, status: READY });

    const moodStation = await fetchSongsByMoodStation(access_token, id);
    localStorage.setItem('moodStationId', id);

    const videoId = await fetchVideoId(moodStation.songs);
    this.player.loadVideoById(videoId, 0, 'small');
    this.player.stopVideo();
    this.setState({
      isOpen: false,
      isLoading: false,
      activeStation: moodStation,
      videoIds: [videoId],
    });
  };

  computePercent = (curTime) => {
    const { status } = this.state;
    if (status === WORKING) {
      return 180 - Math.floor(170 * ((WORK_TIME - curTime) / WORK_TIME));
    }
    return Math.floor(170 * ((BREAK_TIME - curTime) / BREAK_TIME)) + 10;
  };

  render() {
    const { moodStations } = this.props;
    const {
      user,
      activeStation,
      curTime,
      status,
      isOpen,
      isLoading,
      isPlayerReady,
    } = this.state;
    return (
      <div className="container">
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
          handleOpenListPanel={() => {
            this.setState({ isOpen: true });
          }}
        />
        <ListPanel
          moodStations={moodStations}
          isOpen={isOpen}
          isLoading={isLoading}
          handleCloseListPanel={() => {
            this.setState({ isOpen: false });
          }}
          changeActiveStation={this.changeActiveStation}
        />
        <div id="player" />
        <style jsx>
          {`
            div.container {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: #f95f62;
            }
            #player {
              position: fixed;
              bottom: 0;
              right: 0;
              margin: 20px;
              box-shadow: 1px 1px 3px 1px #333;
              transition: all 0.5s cubic-bezier(0.39, 0.58, 0.57, 1);
            }
            #player:hover {
              width: 426px;
              height: 240px;
            }
          `}
        </style>
        <style global jsx>
          {`
            * {
              font-family: 'Gloria Hallelujah', cursive;
            }
            .icon {
              transition: all 0.2s ease-out;
              transform: scale(1, 1);
              cursor: pointer;
              font-size: 36px;
              color: #fff;
            }
            .icon:hover {
              transform: scale(1.2, 1.2);
            }
          `}
        </style>
      </div>
    );
  }
}
