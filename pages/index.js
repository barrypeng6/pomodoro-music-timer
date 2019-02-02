import React from 'react';

import { App, Loading } from '../components';
import { fetchMoodStations, getAccessToken } from '../utils';
import { AUTO_START_AFTER_BREAK } from '../constants';

const WORK_TIME = 1500;
const BREAK_TIME = 300;

const FIRST_BEEP_TIME = 60;

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      const { code = null } = query;
      const { publicToken, privateToken, error } = await getAccessToken(code);

      const access_token = privateToken || publicToken;
      if (access_token) {
        const { data: moodStations } = await fetchMoodStations(access_token);
        return {
          moodStations,
          access_token,
          privateToken,
        };
      }
      return { error };
    }
    return {};
  }

  constructor() {
    super();
    this.state = {
      settings: {
        workPeriod: 0,
        breakPeriod: 0,
        mode: AUTO_START_AFTER_BREAK,
        firstBeepTime: FIRST_BEEP_TIME,
      },
    };
  }

  componentDidMount() {
    const { settings } = this.state;
    const workPeriod = window.localStorage.getItem('workPeriod') || WORK_TIME;
    const breakPeriod =
      window.localStorage.getItem('breakPeriod') || BREAK_TIME;
    this.setState({
      settings: {
        ...settings,
        workPeriod,
        breakPeriod,
      },
    });
  }

  handleSaveSettings = (settings) => {
    const { settings: oldSettings } = this.state;
    const { workPeriod, breakPeriod } = settings;
    this.setState({
      settings: {
        ...oldSettings,
        workPeriod,
        breakPeriod,
      },
    });
    window.localStorage.setItem('workPeriod', workPeriod);
    window.localStorage.setItem('breakPeriod', breakPeriod);
  };

  render() {
    const {
      settings: { workPeriod },
    } = this.state;
    return (
      <div className="container">
        {workPeriod ? (
          <App
            {...this.props}
            {...this.state}
            handleSaveSettings={this.handleSaveSettings}
          />
        ) : (
          <Loading />
        )}
        <style jsx>
          {`
            div.container {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: #f95f62;
            }
          `}
        </style>
        <style global jsx>
          {`
            * {
              font-family: 'Gloria Hallelujah', cursive;
            }
            .icon {
              transition: all 0.2s ease-out;
              transform: scale(1, 1);
              cursor: pointer;
              font-size: 36px;
              color: #fff;
            }
            .icon:hover {
              transform: scale(1.2, 1.2);
            }
          `}
        </style>
      </div>
    );
  }
}
