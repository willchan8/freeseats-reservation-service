import React from 'react';
import moment from 'moment';
import dateFns from 'date-fns';
import axios from 'axios';
import PropTypes from 'prop-types';

import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import Date from './Date.jsx';
import Calendar from './Calendar.jsx';
import NoAvailability from './conditional_messages/NoAvailability.jsx';

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
      bookings: null,
      noAvailMsg: false,
      findTableBtn: true,
      showNextAvail: false,
    };

    this.handleSize = this.handleSize.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleClickCalendar = this.handleClickCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.checkAvailability = this.checkAvailability.bind(this);
    this.getBookings = this.getBookings.bind(this);
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

  checkAvailability() {
    // grab states (partySize, clickedDate, time)
    // if time selected is not 3:30PM to 11PM then render conditional message
    this.setState({
      noAvailMsg: true,
      findTableBtn: false,
      showNextAvail: true,
    });
  }

  getBookings() {
    axios.get('http://localhost:3020/reservations/1')
      .then((res) => {
        console.log(res.data);
        this.setState({
          bookings: res.data.booked,
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

        <PartySize handleSize={this.handleSize} />

        <div className="date-time-wrapper">
          <Date handleClick={this.handleClickCalendar} clickedDate={this.state.clickedDate} />
          <Time handleTime={this.handleTime} />
        </div>

        {this.state.displayCalendar ? <Calendar hideCalendar={this.hideCalendar} handleDate={this.handleDate} changeDate={this.changeDate} /> : null}

        {this.state.findTableBtn ? <button className="find-table" onClick={this.checkAvailability}>Find a Table</button> : null}

        {/* conditional messages and select a time */}
        {/* set up click event where party size, date, and time changed values brings back find table button and message go aways */}

        {this.state.noAvailMsg ? <NoAvailability time={this.state.time} /> : null}

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
