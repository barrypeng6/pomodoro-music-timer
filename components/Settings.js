import React from 'react';
import { AUTO_START_AFTER_BREAK, MANUAL_START_AFTER_BREAK } from '../constants';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workPeriod: props.workPeriod,
      breakPeriod: props.breakPeriod,
      mode: props.mode || MANUAL_START_AFTER_BREAK,
    };
  }

  onChangeWorkPeriod = (e) => {
    const workPeriod = e.target.value;
    this.setState({ workPeriod });
  };

  onChangeBreakPeriod = (e) => {
    const breakPeriod = e.target.value;
    this.setState({ breakPeriod });
  };

  onChangeMode = (e) => {
    const { value } = e.target;
    if (value === MANUAL_START_AFTER_BREAK) {
      this.setState({ mode: AUTO_START_AFTER_BREAK });
    } else {
      this.setState({ mode: MANUAL_START_AFTER_BREAK });
    }
  };

  saveSettings = () => {
    const { handleSaveSettings } = this.props;
    const { workPeriod, breakPeriod, mode } = this.state;
    handleSaveSettings({ workPeriod, breakPeriod, mode });
  };

  render() {
    const { workPeriod, breakPeriod, mode } = this.state;
    return (
      <div>
        <div className="title">Settings</div>
        <div className="setting-wrapper">
          <section>
            <div className="section-title">Mode:</div>
            <label htmlFor="mode">
              <input
                style={{ width: 15 }}
                type="checkbox"
                value={mode}
                checked={mode === AUTO_START_AFTER_BREAK}
                onChange={this.onChangeMode}
              />
              <span>Auto start after break.</span>
            </label>
          </section>
          <br />
          <section className="working-setting">
            <div className="section-title">Working Time</div>
            <label htmlFor="work-period">
              <span>Duration:</span>
              <input
                id="work-period"
                type="number"
                value={workPeriod}
                onChange={this.onChangeWorkPeriod}
              />
              <span>sec.</span>
            </label>
          </section>
          <br />
          <section>
            <div className="section-title">Break Time</div>
            <label htmlFor="break-period">
              <span>Duration:</span>
              <input
                id="break-period"
                type="number"
                value={breakPeriod}
                onChange={this.onChangeBreakPeriod}
              />
              <span>sec.</span>
            </label>
          </section>
          <br />
          <section>
            <button
              type="button"
              onClick={() => {
                const isConfirmed = window.confirm(
                  'Are you sure? Timer will stop if you change settings.',
                );
                if (isConfirmed) {
                  this.saveSettings();
                }
              }}
            >
              Save
            </button>
          </section>
        </div>
        <style jsx>
          {`
            * {
              font-family: initial;
            }
            .title {
              margin: 40px;
              color: #fff;
              font-size: 28px;
              line-height: 40px;
            }
            .setting-wrapper {
              padding: 20px 40px;
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
              box-sizing: border-box;
              border: 0px;
              border-bottom: 2px solid #fff;
              font-size: 16px;
              box-shadow: none;
            }

            .section-title {
              font-weight: bolder;
              font-size: 18px;
              color: #fff;
            }

            @media screen and (max-width: 375px) {
              .title {
                margin: 16px 20px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
