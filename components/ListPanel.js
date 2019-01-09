import React from "react";
import Emoji from "./Emoji";

const getMappingEmoji = mood => {
  switch (mood) {
    case "Work Out":
      return <Emoji symbol="🏋️" lable="Person Lifting Weights" />;
    case "Party Animal":
      return <Emoji symbol="🎉" lable="Party Popper" />;
    case "Relaxing":
      return <Emoji symbol="😎" lable="Smiling Face With Sunglasses" />;
    case "Working Time":
      return <Emoji symbol="💻" lable="Laptop Computer" />;
    case "Romantic":
      return <Emoji symbol="🌹" lable="Rose" />;
    case "Vacation":
      return <Emoji symbol="🏖" lable="️️Beach With Umbrella" />;
    case "Chill Out":
      return <Emoji symbol="☕" lable="Hot Beverage" />;
    case "Tipsy Night":
      return <Emoji symbol="🥂" lable="Clinking Glasses" />;
    case "Acoustic Pop":
      return <Emoji symbol="🎻" lable="Violin" />;
    case "Hardcore":
      return <Emoji symbol="🎸" lable="Guitar" />;
    default:
      return <Emoji symbol="🌏" lable="Globe Showing Asia-Australia" />;
  }
};

export default ({
  changeActiveStation,
  moodStations,
  isOpen,
  isLoading,
  handleCloseListPanel
}) => (
  <div
    id="settings-wrapper"
    style={{
      bottom: isOpen ? 0 : "-95%",
      left: isOpen ? 0 : "-95%",
      transform: isOpen ? "scale(1)" : "scale(0)"
    }}
  >
    {isOpen && (
      <i className="fas fa-times icon" onClick={handleCloseListPanel} />
    )}

    <div className="library">
      {isLoading ? 'loadding...' : moodStations.map(station => {
        return (
          <div
            key={station.id}
            className="emoji-wrapper"
            onClick={() => {
              changeActiveStation(station.id);
            }}
          >
            {getMappingEmoji(station.name)}
          </div>
        );
      })}
    </div>
    <style jsx>{`
      #settings-wrapper {
        position: absolute;
        background-color: #f95f62;
        // bottom: 0;
        // left: 0;
        z-index: 99;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in;
      }
      #settings-wrapper i {
        font-size: 40px;
        float: right;
        margin: 40px;
      }
      .library {
        display: flex;
        flex-wrap: wrap;
        width: 240px;
        margin: 0 auto;
        margin-top: 120px;
        justify-content: space-between;
      }
      .emoji-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        font-size: 40px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
      }
      .emoji-wrapper:hover {
        background-color: #ed143d;
      }
    `}</style>
  </div>
);
