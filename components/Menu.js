import React from 'react';
import getConfig from 'next/config';
import Emoji from './Emoji';
import getMappingEmoji from '../utils/getMappingEmoji';

const {
  publicRuntimeConfig: { APP_ID },
} = getConfig();

export default ({
  user,
  activeStation,
  handleOpenStations,
  handleOpenSettings,
}) => (
  <div id="menu">
    {activeStation && (
      <span id="popup-mood">
        <Emoji symbol={getMappingEmoji(activeStation.mood)} />
      </span>
    )}
    <span className="icon-wrapper" onClick={handleOpenStations}>
      <i className="fas fa-music icon" />
    </span>
    <span className="icon-wrapper" onClick={handleOpenSettings}>
      <i className="fas fa-cog icon" />
    </span>
    <span>
      {user ? (
        <span>
          <span
            id="user-thumb"
            style={{ backgroundImage: `url(${user.thumb})` }}
          />
          <span id="user-name">{user.name}</span>
        </span>
      ) : (
        <a
          href={`https://account.kkbox.com/oauth2/authorize?redirect_uri=${encodeURIComponent(
            'https://music-pomodoro.now.sh/',
          )}&client_id=${APP_ID}&response_type=code&state=2sCg`}
        >
          <i className="fas fa-user-plus icon" />
        </a>
      )}
    </span>
    <style jsx>
      {`
        #menu {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 20px 40px;
          box-sizing: border-box;
        }
        span.icon-wrapper {
          position: relative;
          margin-right: 25px;
          display: inline-block;
        }
        span#popup-mood {
          position: absolute;
          content: '';
          width: 50px;
          height: 50px;
          background-color: #f78b8d;
          bottom: 70px;
          border-radius: 25px;
          left: 40px;
          line-height: 50px;
          margin: 0 auto;
          text-align: center;
          font-size: 28px;
          box-shadow: 1px 1px 1px 0px #795548;
          transition: height 0.5s ease-in;
          animation: floating 2s infinite;
        }

        @keyframes floating {
          0% {
            bottom: 70px;
          }
          50% {
            bottom: 72px;
          }
          100% {
            bottom: 70px;
          }
        }

        span#popup-mood:after {
          position: absolute;
          content: '';
          width: 5px;
          height: 5px;
          background-color: #f78b8d;
          bottom: -2px;
          left: 22px;
          transform: rotate(45deg);
          box-shadow: 1px 1px 1px 0px #795548;
        }

        #user-thumb {
          width: 36px;
          position: relative;
          height: 36px;
          background-color: #fff;
          display: inline-block;
          border-radius: 18px;
          top: 5px;
          background-size: cover;
        }

        #user-name {
          font-size: 12px;
          margin-left: 5px;
        }

        @media screen and (max-width: 375px) {
          #menu {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 20px 20px;
            box-sizing: border-box;
          }
          .icon {
            font-size: 24px;
          }
          span.open {
            margin-left: 5px;
          }
          span#popup-mood {
            left: 10px;
            bottom: 60px;
          }
          span#popup-mood:after {
            left: 22px;
          }
          #user-thumb {
            width: 24px;
            height: 24px;
          }
        }
      `}
    </style>
  </div>
);
