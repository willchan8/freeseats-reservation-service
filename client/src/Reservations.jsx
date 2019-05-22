import React from 'react';
import moment from 'moment';

import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import Date from './Date.jsx';

import '../../public/styles.css';

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partySize: 2,
      date: moment(),
      time: '6:00 PM',
    };

    this.handleSize = this.handleSize.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
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

  render() {
    return (
      <div className="reservations">
        <div className="reservation-title-wrapper">
          <span className="make-res-title">Make a reservation</span>
        </div>
        <PartySize handleSize={this.handleSize} />
        <div className="date-time-wrapper">
          <Date handleDate={this.handleDate} clickedDate={this.state.date} />
          <Time handleTime={this.handleTime} />
        </div>
      </div>
    );
  }
}

export default Reservations;
