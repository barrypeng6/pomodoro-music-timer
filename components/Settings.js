import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workingPeriod: 25,
      breakPeriod: 5,
    };
  }

  render() {
    const {
      workingPeriod,
      breakPeriod,
    } = this.state;
    return (
      <div>
        <div className="title">Settings</div>
        <div className="setting-wrapper">
          <section className="working-setting">
            <div className="section-title">Working Time</div>
            <label>
              <span>Duration:</span>
              <input type="number" max="300" min="25" value={workingPeriod} />
              <span>min(s)</span>
            </label>
          </section>
          <br />
          <section>
            <div className="section-title">Break Time</div>
            <label>
              <span>Duration:</span>
              <input type="number" max="300" min="25" value={breakPeriod} />
              <span>min(s)</span>
            </label>
          </section>
        </div>
        <style jsx>
          {`
            .title {
              margin: 16px 20px;
              color: #fff;
              font-size: 20px;
            }
            .setting-wrapper {
              padding: 20px;
            }
            .setting-wrapper span {
              color: #fff;
              margin: 5px;
            }
            .setting-wrapper input {
              background-color: #f58080;
              outline: none;
              border: 1px solid #fff;
              display: inline-block;
              color: #fff;
              width: 50px;
              text-align: right;
              box-sizing: border-box;
              border: 0px;
              border-bottom: 2px solid #fff;
              font-size: 12px;
              box-shadow: none;
              padding-right: 5px;
            }

            .section-title {
              font-weight: bolder;
              font-size: 18px;
              color: #fff;
            }
          `}
        </style>
      </div>
    );
  }
}
