import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import moment from 'moment';

import Calendar from './Calendar.jsx';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
    };
  }

  render() {
    return (
      <div className="date-wrapper">
        <div className="date-title">Date</div>
        <div className="display-date">{this.state.date.format('ddd, M/D')}</div>
      </div>
    );
  }
}

Date.propTypes = {
  handleDate: PropTypes.func,
};

export default Date;
