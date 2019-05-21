import React from 'react';
import dateFns from 'date-fns';
import moment from 'moment';

import Calendar from './Calendar.jsx';
import PartySize from './PartySize.jsx';

import '../../public/styles.css';

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partySize: 2,
      date: moment(),
      time: '6PM',
    };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="reservations">
        <div className="reservation-title-wrapper">
          <span className="make-res-title">Make a reservation</span>
        </div>
        <PartySize />
        <Calendar />
      </div>
    );
  }
}

export default Reservations;
