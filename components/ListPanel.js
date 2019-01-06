import React from "react";

export default ({ isOpen, handleCloseListPanel }) => (
  <div
    id="settings-wrapper"
    style={{ opacity: isOpen ? 1 : 0, width: isOpen ? "100%" : 0 }}
  >
    <i className="fas fa-times icon" onClick={handleCloseListPanel} />
    <style jsx>{`
      #settings-wrapper {
        position: absolute;
        background-color: #f95f62;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 99;
        transition: all 0.5s ease-in;
      }
    `}</style>
  </div>
);
