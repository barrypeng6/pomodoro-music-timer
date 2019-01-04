import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  };

  onPlayerStateChange = e => {
    if (event.data === 0) {
      console.log("done");
    }
  };

  render() {
    return (
      <div className="container">
        <main>
          <h1 id="title">Pomodoro Music Timer</h1>
          <div style={{ position: 'relative' }}>
            <div id="tomato-fill"></div>
            <img id="tomato" src="/static/tomato.svg" width="242" height="210"/>
          </div>
          
        </main>
        <div id="menu">
          <img
            className="icon"
            onClick={() => {}}
            width="60"
            height="60"
            src="/static/settings.png"
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
          main {
            flex-grow: 1;
          }
          #tomato {
            position: absolute;
          }
          #tomato-fill {
            position: absolute;
            top: 10px;
            left: 12px;
            width: 216px;
            height: 190px;
            border-radius: 50%;
            background: url(https://png.pngtree.com/thumb_back/fw800/back_pic/04/09/27/5458156b6e9481f.jpg);
            background-position: 0px 160px;
            background-repeat: repeat-x;
            animation: filling 5s linear infinite;
            background-size: cover;
          }
          @keyframes filling {
            100% {background-position: 1800px 10px;}
          }
          #title {
            color: #fff;
            text-align: center;
          }
          #menu {
            background-color: #eeeeee38;
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 20px 0;
          }
          #menu > .icon {
            transition: all 0.2s ease-out;
            transform: scale(1, 1);
            cursor: pointer;
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
