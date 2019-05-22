import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '6:00 PM',
      current: moment(),
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(e) {
    this.props.handleTime(e);
    this.setState({
      time: e.target.value,
    });
  }

  // check current time if today's date is selected from date component (need to pass down state from parent)
  // if true then render only times that are after current time

  render() {
    const times = [];

    for (let hour = 0; hour < 24; hour++) {
      times.push(moment({ hour }).format('h:mm A'));
      times.push(moment({ hour, minute: 30 }).format('h:mm A'));
    }

    const timeOptions = times.map((time) => {
      return <option className="time-selected" key={time} value={time}>{time}</option>;
    });

    return (
      <div className="time-wrapper">
        <div className="time-title">Time</div>
        <select className="time-list" defaultValue="6:00 PM" onChange={this.handleTimeChange}>
          {timeOptions}
        </select>
      </div>
    );
  }
}

Time.propTypes = {
  handleTime: PropTypes.func,
};

export default Time;
