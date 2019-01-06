import React from "react";

export default ({ handleOpenListPanel }) => (
  <div id="menu">
    <i className="fas fa-music icon" onClick={handleOpenListPanel} />
    <i className="fas fa-cog icon" />
    <style jsx>{`
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
    `}</style>
  </div>
);
