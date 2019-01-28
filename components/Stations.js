import React from 'react';
import Emoji from './Emoji';
import getMappingEmoji from '../utils/getMappingEmoji';

export default ({
  moodStations,
  isLoading,
  user,
  changeActiveStation,
  changeToFavorite,
}) => (
  <div className="library">
    {isLoading
      ? 'loadding...'
      : moodStations.map(station => (
        <div
          key={station.id}
          className="emoji-wrapper"
          onClick={() => {
            changeActiveStation(station.id);
          }}
        >
          <Emoji symbol={getMappingEmoji(station.name)} />
          <div style={{ fontSize: 12 }}>{station.name}</div>
        </div>
      ))}
    {user && !isLoading && (
      <div className="emoji-wrapper" onClick={changeToFavorite}>
        <Emoji symbol="⭐" />
        <div style={{ fontSize: 12 }}>Favorite</div>
      </div>
    )}
    <style jsx>
      {`
        .library {
          display: flex;
          flex-wrap: wrap;
          width: 300px;
          margin: 0 auto;
          margin-top: 120px;
          justify-content: flex-start;
        }
        .emoji-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          line-height: 40px;
          font-size: 40px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          border-radius: 50%;
        }
        .emoji-wrapper:hover {
          background-color: #ed143d;
        }

        @media screen and (max-width: 375px) {
          .emoji-wrapper {
            width: 80px;
            height: 80px;
            font-size: 30px;
            line-height: 30px;
          }
          .library {
            margin-top: 70px;
            width: 240px;
          }
        }
      `}
    </style>
  </div>
);
