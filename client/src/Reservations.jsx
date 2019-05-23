import React from 'react';
import moment from 'moment';
import dateFns from 'date-fns';

import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import Date from './Date.jsx';
import Calendar from './Calendar.jsx';

import '../../public/styles.css';

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partySize: 2,
      date: moment(),
      clickedDate: 'Today',
      time: '6:00 PM',
      displayCalendar: false,
    };

    this.handleSize = this.handleSize.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleClickCalendar = this.handleClickCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  handleSize(e) {
    this.setState({
      partySize: e.target.value,
    });
  }

  handleTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  handleDate(e) {
    this.setState({
      date: e,
    });
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
    if (dateFns.format(e, 'ddd, M/D') === dateFns.format(moment(), 'ddd, M/D')) {
      this.setState({
        clickedDate: 'Today',
      });
    } else {
      this.setState({
        clickedDate: dateFns.format(e, 'ddd, M/D'),
      });
    }
  }

  render() {
    return (
      <div className="reservations">
        <div className="reservation-title-wrapper">
          <span className="make-res-title">Make a reservation</span>
        </div>
        <PartySize handleSize={this.handleSize} />
        <div className="date-time-wrapper">
          <Date handleClick={this.handleClickCalendar} clickedDate={this.state.clickedDate} />
          <Time handleTime={this.handleTime} />
        </div>
        {this.state.displayCalendar ? <Calendar hideCalendar={this.hideCalendar} handleDate={this.handleDate} changeDate={this.changeDate} /> : null}
      </div>
    );
  }
}

export default Reservations;
