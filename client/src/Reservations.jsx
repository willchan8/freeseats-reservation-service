import React from 'react';
import moment from 'moment';
import dateFns from 'date-fns';
import axios from 'axios';
import PropTypes from 'prop-types';

import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import DateSection from './DateSection.jsx';
import Calendar from './Calendar.jsx';
import NoAvailability from './conditional_messages/NoAvailability.jsx';
import TooBig from './conditional_messages/TooBig.jsx';
import TooFar from './conditional_messages/TooFar.jsx';

import '../../public/styles.css';

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partySize: 2,
      date: moment(),
      clickedDate: 'Today',
      time: '6:00 PM',
      bookings: null,
      resName: null,
      displayCalendar: false,
      noAvailMsg: false,
      findTableBtn: true,
      showNextAvail: false,
      tooBig: false,
      tooFar: false,
    };

    this.handleSize = this.handleSize.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleClickCalendar = this.handleClickCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.checkAvailability = this.checkAvailability.bind(this);
    this.getBookings = this.getBookings.bind(this);
    this.getBtnBack = this.getBtnBack.bind(this);
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

  getBtnBack() {
    this.setState({
      findTableBtn: true,
      showNextAvail: false,
      noAvailMsg: false,
      tooBig: false,
      tooFar: false,
    });
  }

  // make sure to toggle between all displays for conditionals in getBtnBack and checkAvail funcs!!
  // noAvailMsg: false,
  // findTableBtn: true,
  // showNextAvail: false,
  // tooBig: false,
  // tooFar: false,

  checkAvailability() {
    const checkTime = this.state.time.split(' ');
    const checkHour = checkTime[0].split(':');
    const hour = Number(checkHour[0]);

    if (checkTime[1] === 'AM' || hour < 3 || this.state.time === '3:00 PM' || this.state.time === '11:30 PM') {
      this.setState({
        noAvailMsg: true,
        findTableBtn: false,
        showNextAvail: true,
        tooBig: false,
        tooFar: false,
      });
    }

    const future = this.state.date;
    const today = new Date();

    if (dateFns.differenceInCalendarDays(future, today) > 90) {
      this.setState({
        tooFar: true,
        findTableBtn: false,
        showNextAvail: true,
        tooBig: false,
        noAvailMsg: false,
      });
    }

    if (this.state.partySize > 6) {
      this.setState({
        tooBig: true,
        findTableBtn: false,
        showNextAvail: false,
        noAvailMsg: false,
        tooFar: false,
      });
    }
  }

  getBookings() {
    axios.get('http://localhost:3020/reservations/1')
      .then((res) => {
        console.log(res.data);
        this.setState({
          bookings: res.data.booked,
          resName: res.data.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getBookings();
  }

  render() {
    return (
      <div className="reservations">

        <div className="reservation-title-wrapper">
          <span className="make-res-title">Make a reservation</span>
        </div>

        <PartySize handleSize={this.handleSize} getBtnBack={this.getBtnBack} />

        <div className="date-time-wrapper">
          <DateSection handleClick={this.handleClickCalendar} clickedDate={this.state.clickedDate} />
          <Time handleTime={this.handleTime} getBtnBack={this.getBtnBack} />
        </div>

        {this.state.displayCalendar ? <Calendar hideCalendar={this.hideCalendar} handleDate={this.handleDate} changeDate={this.changeDate} getBtnBack={this.getBtnBack} /> : null}

        {this.state.findTableBtn ? <button className="find-table" onClick={this.checkAvailability}>Find a Table</button> : null}

        {/* conditional messages and select a time */}

        {this.state.noAvailMsg ? <NoAvailability time={this.state.time} /> : null}

        {this.state.tooBig ? <TooBig resName={this.state.resName} /> : null}

        {this.state.tooFar ? <TooFar resName={this.state.resName} /> : null}

        <div className="bookings">
          <img src="https://s3-us-west-1.amazonaws.com/freeseats-imgs/Booking.png" height="18px" width="22px" />
          <span className="bookings-caption">Booked {this.state.bookings} times today</span>
        </div>

        {this.state.showNextAvail ? <button className="show-next-avail-btn">Show next available</button> : null}

      </div>
    );
  }
}

Reservations.propTypes = {
  id: PropTypes.number,
};

export default Reservations;
