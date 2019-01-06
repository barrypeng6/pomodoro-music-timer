import React from "react";
import { INITIAL, WORKING, BREAK } from '../constants';

export default ({ status, curTime, percent, handleStart, covertSecToMinSec }) => (
  <main>
    <header>
      <h1 id="title">{status}</h1>
    </header>
    <div id="timer">{covertSecToMinSec(curTime)}</div>
    <div style={{ position: "relative", width: 242, height: 210 }}>
      <div
        id="tomato-fill"
        style={{
          backgroundPosition: `0px ${status === INITIAL ? 180 : percent}px`
        }}
      />
      <img id="tomato" src="/static/tomato.svg" width="242" height="210" />
      {status === INITIAL && (
        <i
          id="start-btn"
          className="fas fa-play icon"
          onClick={handleStart}
        />
      )}
    </div>
    <style jsx>{`
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
    `}</style>
  </main>
);
