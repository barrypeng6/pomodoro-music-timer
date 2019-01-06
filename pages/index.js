import React from "react";
import { Auth } from "@kkbox/kkbox-js-sdk";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { appId, appSecret }
} = getConfig();

const AUTO_START_AFTER_BREAK = 'AUTO_START_AFTER_BREAK';
const MANUAL_START_AFTER_BREAK = 'MANUAL_START_AFTER_BREAK';
const MODE = MANUAL_START_AFTER_BREAK;

// const LIST = ['elsh3J5lJ6g', 'cL4uhaQ58Rk'];
const LIST = ['LrzvNpNbdps', '0_CDMstFg7M'];

const WORK_TIME = 20;
const BREAK_TIME = 10;
const TOTAL_SONGS = 2;

const INITIAL = 'INITIAL';
const WORKING = 'WORKING';
const BREAK = 'BREAK';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      // Create an auth object with client id and secret
      const auth = new Auth(appId, appSecret);

      // Fetch your access token
      const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
      const access_token = authResponse.data.access_token;
      return { access_token };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      status: INITIAL,
      count: 0,
      curTime: WORK_TIME,
      isOpen: false
    };
  }

  componentDidMount() {
    // Setting up Youtube iframe
    window.onYouTubePlayerAPIReady = () => {
      this.player = new window.YT.Player("player", {
        height: "100",
        width: "180",
        videoId: LIST[0],
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
  }

  onPlayerReady = e => {
    console.log("ready");
    // const duration = this.player.getDuration();
    // this.setState({ curTime: WORK_TIME });
  };

  onPlayerStateChange = event => {
    console.log(event.data)
    if (event.data === 0) {
      const { count } = this.state;
      if (count < TOTAL_SONGS) {
        console.log("continue");
        this.player.loadVideoById(LIST[count + 1], 0, "small");
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
      // TODO: fetch new list
      this.player.loadVideoById(LIST[0], 0, "small");
      this.player.stopVideo();
      if (MODE === MANUAL_START_AFTER_BREAK) {
        this.setState({ status: INITIAL, curTime: WORK_TIME, count: 0 });
      } else {
        this.player.playVideo();
        this.timer = setInterval(this.handleCountDownWorkTime, 1000);
        this.setState({ status: WORKING, curTime: WORK_TIME, count: 0 });
      }
    }
  }

  computePercent = curTime => {
    const { status } = this.state;
    if (status === WORKING) {
      return 180 - Math.floor(170 * ((WORK_TIME - curTime) / WORK_TIME));
    }
    return Math.floor(170 * ((BREAK_TIME - curTime) / BREAK_TIME)) + 10;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { curTime, status, isOpen } = this.state;
    const percent = this.computePercent(curTime);
    return (
      <div className="container">
        <main>
          <header>
            <h1 id="title">{status}</h1>
          </header>
          <div id="timer">{this.covertSecToMinSec(curTime)}</div>
          <div style={{ position: "relative", width: 242, height: 210 }}>
            <div
              id="tomato-fill"
              style={{
                backgroundPosition: `0px ${status === INITIAL ? 180 : percent}px`
              }}
            />
            <img
              id="tomato"
              src="/static/tomato.svg"
              width="242"
              height="210"
            />
            {status === INITIAL && (
              <i
                id="start-btn"
                className="fas fa-play icon"
                onClick={this.handleStart}
              />
            )}
          </div>
        </main>
        <div id="menu">
          <i
            className="fas fa-music icon"
            onClick={() => {
              this.setState({ isOpen: true });
            }}
          />
          <i className="fas fa-cog icon" />
        </div>
        <div
          id="settings-wrapper"
          style={{ opacity: isOpen ? 1 : 0, width: isOpen ? "100%" : 0 }}
        >
          <i
            className="fas fa-times icon"
            onClick={() => {
              this.setState({ isOpen: false });
            }}
          />
        </div>
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
          header {
            position: absolute;
            top: 0;
          }
          main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
          }
          #start-btn {
            display: block;
            position: absolute;
            width: 100%;
            text-align: center;
            top: 40%;
            font-size: 52px;
          }
          #tomato {
            position: absolute;
            top: 0;
          }
          #tomato-fill {
            position: relative;
            top: 10px;
            left: 12px;
            width: 216px;
            height: 190px;
            border-radius: 50%;
            background: url(https://www.colorhexa.com/b5e98b.png);
            background-repeat: repeat-x;
            background-size: cover;
          }
          #timer {
            color: #a5e98b;
            font-size: 56px;
            text-align: center;
          }
          #title {
            color: #fff;
            text-align: center;
          }
          #menu {
            position: absolute;
            right: 0;
            bottom: 0;
            top: 0;
            // background-color: #eeeeee38;
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 40px 0;
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
          #settings-wrapper {
            position: absolute;
            background-color: #f95f62;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 99;
            transition: all 0.5s ease-in;
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
        `}</style>
      </div>
    );
  }
}
