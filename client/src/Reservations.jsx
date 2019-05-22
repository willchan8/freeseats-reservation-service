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

    this.handleSize = this.handleSize.bind(this);
  }

  handleSize(e) {
    this.setState({
      partySize: e.target.value,
    });
  }

  render() {
    return (
      <div className="reservations">
        <div className="reservation-title-wrapper">
          <span className="make-res-title">Make a reservation</span>
        </div>
        <PartySize handleSize={this.handleSize} />
        <Calendar />
      </div>
    );
  }
}

export default Reservations;
