import React from 'react';

export default () => (
  <div className="wrapper">
    <h1>Welcome</h1>
    <style jsx>
      {`
        .wrapper {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          color: #fff;
        }
      `}
    </style>
  </div>
);
