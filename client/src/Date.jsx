import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import moment from 'moment';

import Calendar from './Calendar.jsx';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 'Today',
      displayCalendar: false,
    };

    this.handleClickCalendar = this.handleClickCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  handleClickCalendar() {
    this.setState({
      displayCalendar: true,
    });
  }

  hideCalendar() {
    this.setState({
      displayCalendar: false,
    });
  }

  changeDate(e) {
    if (dateFns.format(e, 'ddd, M/D') !== dateFns.format(moment(), 'ddd, M/D')) {
      this.setState({
        date: dateFns.format(e, 'ddd, M/D'),
      });
    } else if (dateFns.format(e, 'ddd, M/D') === dateFns.format(moment(), 'ddd, M/D')) {
      this.setState({
        date: 'Today',
      });
    }
  }

  render() {
    return (
      <div className="date-wrapper">
        <div className="date-title">Date</div>
        <div className="display-date" onClick={this.handleClickCalendar} >
          {this.state.date}
        </div>
        {this.state.displayCalendar ? <Calendar changeDate={this.changeDate} handleDate={this.props.handleDate} hideCalendar={this.hideCalendar} /> : null}
      </div>
    );
  }
}

Date.propTypes = {
  handleDate: PropTypes.func,
};

export default Date;
