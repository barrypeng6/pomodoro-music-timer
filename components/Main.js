import React from "react";
import Tomato from "./Tomato";

export default ({
  status,
  curTime,
  percent,
  handleStart,
  covertSecToMinSec,
  isPlayerReady,
}) => (
  <div>
    <div id="title">{status}</div>
    <main>
      <div id="timer">{covertSecToMinSec(curTime)}</div>
      <Tomato status={status} percent={percent} handleStart={handleStart} isPlayerReady={isPlayerReady} />
    </main>
    <style jsx>{`
      main {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      #timer {
        color: #a5e98b;
        font-size: 56px;
        text-align: center;
      }
      #title {
        color: #fff;
        text-align: center;
        font-size: 36px;
        padding: 20px 0px;
      }
    `}</style>
  </div>
);
