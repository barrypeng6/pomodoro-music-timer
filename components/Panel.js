import React from 'react';

export default ({ children, isOpen, handleClosePanel }) => (
  <div
    id="settings-wrapper"
    style={{
      bottom: isOpen ? 0 : '-95%',
      left: isOpen ? 0 : '-95%',
      transform: isOpen ? 'scale(1)' : 'scale(0)',
    }}
  >
    {isOpen && (
      <i className="fas fa-times icon" onClick={handleClosePanel} />
    )}
    {children}
    <style jsx>
      {`
        #settings-wrapper {
          position: absolute;
          background-color: #f95f62;
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
          #settings-wrapper i {
            font-size: 30px;
            margin: 20px;
          }

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
