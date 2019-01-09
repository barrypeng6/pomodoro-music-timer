import React from "react";
import Emoji from "./Emoji";

const getMappingEmoji = mood => {
  switch (mood) {
    case "Work Out":
      return "🏋️";
    case "Party Animal":
      return "🎉";
    case "Relaxing":
      return "😎";
    case "Working Time":
      return "💻";
    case "Romantic":
      return "🌹";
    case "Vacation":
      return "🏖";
    case "Chill Out":
      return "☕";
    case "Tipsy Night":
      return "🥂";
    case "Acoustic Pop":
      return "🎻";
    case "Hardcore":
      return "🎸";
    default:
      return "🌏";
  }
};

export default ({
  activeStation,
  moodStations,
  handleOpenListPanel,
  handleCloseListPanel,
  changeActiveStation
}) => (
  <div id="menu">
    <span id="popup-mood">
      <Emoji symbol={getMappingEmoji(activeStation.mood)} />
    </span>
    <span className="icon-wrapper">
      <i className="fas fa-music icon" onClick={handleOpenListPanel} />
    </span>
    <span className="icon-wrapper">
      <i className="fas fa-cog icon" />
    </span>
    <style jsx>{`
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
        content: "";
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
        content: "";
        width: 5px;
        height: 5px;
        background-color: #f78b8d;
        bottom: -2px;
        left: 22px;
        transform: rotate(45deg);
        box-shadow: 1px 1px 1px 0px #795548;
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
        .icon-wrapper .icon {
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
      }
    `}</style>
  </div>
);
