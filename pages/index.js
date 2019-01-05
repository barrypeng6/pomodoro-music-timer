import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      curentSec: 0,
      totalSec: 0
    };
  }

  componentDidMount() {
    // Setting up Youtube iframe
    window.onYouTubePlayerAPIReady = () => {
      this.player = new window.YT.Player("player", {
        height: "100",
        width: "180",
        videoId: "elsh3J5lJ6g",
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
    const duration = this.player.getDuration();
    this.setState({ totalSec: duration, curentSec: duration });
  };

  onPlayerStateChange = e => {
    if (event.data === 0) {
      console.log("done");
      clearInterval(this.timer);
    }
  };

  covertSecToMinSec = curentSec => {
    const min = Math.floor(curentSec / 60);
    const sec = curentSec % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  handleStart = () => {
    if (this.player) {
      this.player.playVideo();
      this.timer = setInterval(this.handleCountDown, 1000);
      this.setState({ isPlaying: true });
    }
  };

  handleCountDown = () => {
    const { curentSec } = this.state;
    if (curentSec > 0) {
      this.setState({ curentSec: curentSec - 1 });
    } else {
      clearInterval(this.timer);
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { totalSec, curentSec, isPlaying } = this.state;
    const percent = 180 - Math.floor(170 * ((totalSec - curentSec) / totalSec));
    return (
      <div className="container">
        <main>
          <header>
            <h1 id="title">Pomodoro Music Timer</h1>
          </header>
          <div id="timer">{this.covertSecToMinSec(curentSec)}</div>
          {!isPlaying && <button onClick={this.handleStart}>Start</button>}
          <div style={{ position: "relative", width: 242, height: 210 }}>
            <div
              id="tomato-fill"
              style={{
                backgroundPosition: `0px ${!isPlaying ? 180 : percent}px`
              }}
            />
            <img
              id="tomato"
              src="/static/tomato.svg"
              width="242"
              height="210"
            />
          </div>
        </main>
        <div id="menu">
          <i className="fas fa-cog icon" />
          <i className="fas fa-music icon" />
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
            background-color: #eeeeee38;
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 40px 0;
          }
          #menu > .icon {
            transition: all 0.2s ease-out;
            transform: scale(1, 1);
            cursor: pointer;
            font-size: 36px;
            color: #fff;
            margin-bottom: 40px;
          }
          #menu > .icon:hover {
            transform: scale(1.2, 1.2);
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
