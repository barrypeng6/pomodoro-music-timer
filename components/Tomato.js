import React from "react";
import { READY } from "../constants";

export default ({ status, handleStart, percent }) => (
  <div id="tomato-wrapper">
    <div
      id="tomato-fill"
      style={{
        backgroundPosition: `0px ${status === READY ? 180 : percent}px`
      }}
    />
    <img id="tomato" src="/static/tomato.svg" width="242" height="210" />
    {status === READY && (
      <i id="start-btn" className="fas fa-play icon" onClick={handleStart} />
    )}
    <style jsx>{`
      #start-btn {
        display: block;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 40%;
        font-size: 52px;
      }
      #tomato-wrapper {
        position: relative;
        width: 242px;
        height: 210px;
        margin: 0 auto;
      }
      #tomato-wrapper > img {
        width: inherit;
        height: inherit;
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

      @media screen and (max-width: 375px) {
        #tomato-wrapper {
          transform: scale(0.7);
        }
        #timer {
          font-size: 36px;
        }
        #title {
          font-size: 24px;
        }
      }
    `}</style>
  </div>
);
