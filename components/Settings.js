import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workPeriod: props.workPeriod,
      breakPeriod: props.breakPeriod,
    };
  }

  onChangeWorkPeriod = (e) => {
    const workPeriod = e.target.value;
    this.setState({ workPeriod });
  }

  onChangeBreakPeriod = (e) => {
    const breakPeriod = e.target.value;
    this.setState({ breakPeriod });
  }

  saveSettings = () => {
    const { handleSaveSettings } = this.props;
    const { workPeriod, breakPeriod } = this.state;
    handleSaveSettings({ workPeriod, breakPeriod });
  }

  render() {
    const {
      workPeriod,
      breakPeriod,
    } = this.state;
    return (
      <div>
        <div className="title">Settings</div>
        <div className="setting-wrapper">
          <section className="working-setting">
            <div className="section-title">Working Time</div>
            <label htmlFor="work-period">
              <span>Duration:</span>
              <input
                id="work-period"
                type="number"
                max="300"
                min="25"
                value={workPeriod}
                onChange={this.onChangeWorkPeriod}
              />
              <span>min(s)</span>
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
                max="300"
                min="25"
                value={breakPeriod}
                onChange={this.onChangeBreakPeriod}
              />
              <span>min(s)</span>
            </label>
          </section>
          <button
            type="button"
            onClick={() => {
              const isConfirmed = window.confirm('Are you sure? Timer will stop if you change settings.');
              if (isConfirmed) {
                this.saveSettings();
              }
            }}
          >
            Save
          </button>
        </div>
        <style jsx>
          {`
            .title {
              margin: 40px;
              color: #fff;
              font-size: 20px;
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
