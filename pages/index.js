import React from "react";
import fetch from "isomorphic-unfetch";
import { Auth } from "@kkbox/kkbox-js-sdk";
import getConfig from "next/config";

import { Main, Menu, ListPanel } from "../components";
import { INITIAL, WORKING, BREAK } from "../constants";
import {
  fetchMoodStations,
  fetchSongsByMoodStation,
  getRandomNums
} from "../utils";

const {
  serverRuntimeConfig: { APP_ID, APP_SECRET, YT_API_KEY }
} = getConfig();

const AUTO_START_AFTER_BREAK = "AUTO_START_AFTER_BREAK";
const MANUAL_START_AFTER_BREAK = "MANUAL_START_AFTER_BREAK";
const MODE = MANUAL_START_AFTER_BREAK;

const WORK_TIME = 1500;
const BREAK_TIME = 300;
const TOTAL_SONGS = 7;

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      // Create an auth object with client id and secret
      const auth = new Auth(APP_ID, APP_SECRET);

      // Fetch your access token
      const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
      const access_token = authResponse.data.access_token;

      const moodStations = await fetchMoodStations(access_token);
      const moodStation = await fetchSongsByMoodStation(
        access_token,
        "TZZ4fMCHdJNYqHEf-p"
      );

      const randomNums = getRandomNums(moodStation.songs.length);

      const searchStrings = randomNums.map(num => {
        return `${moodStation.songs[num].name.replace(
          /\s+/g,
          "+"
        )}+${moodStation.songs[num].artist.replace(/\s+/g, "+")}`;
      });

      const videoIds = await Promise.all(
        searchStrings.map(async str => {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=${encodeURIComponent(
              str
            )}&type=video&key=${YT_API_KEY}`
          );
          const data = await res.json();
          return data.items[0].id.videoId;
        })
      );

      return {
        videoIds,
        searchStrings,
        moodStation,
        moodStations,
        access_token
      };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      videoIds: [],
      moodStations: [],
      status: INITIAL,
      count: 0,
      curTime: WORK_TIME,
      isOpen: false
    };
  }

  async componentDidMount() {
    const { videoIds, moodStations } = this.props;
    // Setting up Youtube iframe
    window.onYouTubePlayerAPIReady = () => {
      this.player = new window.YT.Player("player", {
        height: "60",
        width: "100",
        videoId: videoIds[0],
        playerVars: {
          controls: 0,
          modestbranding: 1
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    };

    console.log("==>", moodStations);
    console.log(" work >>", this.props.moodStation);
    console.log("==>", this.props.searchStrings);
    console.log("===>", videoIds);
    this.setState({ videoIds });
  }

  onPlayerReady = e => {
    console.log("ready");
    // const duration = this.player.getDuration();
    // this.setState({ curTime: WORK_TIME });
  };

  onPlayerStateChange = event => {
    console.log(event.data);
    if (event.data === 0) {
      const { count } = this.state;
      if (count < TOTAL_SONGS) {
        console.log("continue");
        this.player.loadVideoById(this.props.videoIds[count + 1], 0, "small");
        this.setState({ count: count + 1 });
      } else {
        console.log("done");
        clearInterval(this.timer);
      }
    }
  };

  covertSecToMinSec = curTime => {
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

  handleCountDownWorkTime = () => {
    const { curTime } = this.state;
    if (curTime > 0) {
      this.setState({ curTime: curTime - 1 });
    } else {
      this.player.stopVideo();
      clearInterval(this.timer);
      
      // TODO: fetch new list

      this.setState({ status: BREAK, curTime: BREAK_TIME });
      this.timer = setInterval(this.handleCountDownBreakTime, 1000);
    }
  };

  handleCountDownBreakTime = () => {
    const { curTime } = this.state;
    if (curTime > 0) {
      this.setState({ curTime: curTime - 1 });
    } else {
      clearInterval(this.timer);
      this.player.loadVideoById(this.props.videoIds[0], 0, "small");
      this.player.stopVideo();
      if (MODE === MANUAL_START_AFTER_BREAK) {
        this.setState({ status: INITIAL, curTime: WORK_TIME, count: 0 });
      } else {
        this.player.playVideo();
        this.timer = setInterval(this.handleCountDownWorkTime, 1000);
        this.setState({ status: WORKING, curTime: WORK_TIME, count: 0 });
      }
    }
  };

  computePercent = curTime => {
    const { status } = this.state;
    if (status === WORKING) {
      return 180 - Math.floor(170 * ((WORK_TIME - curTime) / WORK_TIME));
    }
    return Math.floor(170 * ((BREAK_TIME - curTime) / BREAK_TIME)) + 10;
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    this.player = null;
  }

  render() {
    const { moodStation } = this.props;
    const { curTime, status, isOpen } = this.state;
    return (
      <div className="container">
        <Main
          status={status}
          curTime={curTime}
          percent={this.computePercent(curTime)}
          handleStart={this.handleStart}
          covertSecToMinSec={this.covertSecToMinSec}
        />
        <Menu
          handleOpenListPanel={() => {
            this.setState({ isOpen: true });
          }}
        />
        <ListPanel
          isOpen={isOpen}
          handleCloseListPanel={() => {
            this.setState({ isOpen: false });
          }}
        />
        <div id="mood-title">{moodStation.mood}</div>
        <div id="player" />
        <style jsx>{`
          div.container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            background-color: #f95f62;
          }
          #mood-title {
            position: fixed;
            bottom: 90px;
            right: 30px;
            font-size: 14px;
          }
          #player {
            position: fixed;
            bottom: 0;
            right: 0;
            margin: 20px;
            box-shadow: 1px 1px 3px 1px #333;
          }
        `}</style>
        <style global jsx>{`
          * {
            font-family: "Gloria Hallelujah", cursive;
          }
          .icon {
            transition: all 0.2s ease-out;
            transform: scale(1, 1);
            cursor: pointer;
            font-size: 36px;
            color: #fff;
            margin-bottom: 40px;
          }
          .icon:hover {
            transform: scale(1.2, 1.2);
          }
        `}</style>
      </div>
    );
  }
}
