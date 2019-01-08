import React from "react";

export default ({ symbol }) => (
  <span className="emoji" role="img">
    {symbol}
    <style jsx>{`
      .emoji {
      }
    `}</style>
  </span>
);
