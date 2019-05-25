import React from 'react';
import PropTypes from 'prop-types';

import '../../../public/styles.css';

const AvailTimes = (props) => {
  const checkTime = props.time.split(' ');
  const checkHour = checkTime[0].split(':');
  const hour = Number(checkHour[0]);
  const timeSlots = props.availTimeSlots;
  let times;

  if (hour === 4) {
    const timesFor4 = [];
    for (let i = 0; i < timeSlots.length; i++) {
      const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
      if (hour === 6) {
        timesFor4.push(timeSlots[i]);
      }
    }

    times = timesFor4.map(time => {
      return <div className="avail-time" key={time} >
        <span className="avail-time-caption">{time}</span>
      </div>;
    });

  } else if (hour === 5) {
    const timesFor5 = [];

    while (timesFor5.length < 5) {
      for (let i = 0; i < timeSlots.length; i++) {
        const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
        if (hour === 6 || hour === 7) {
          timesFor5.push(timeSlots[i]);
        }
      }
    }

    times = timesFor5.map(time => {
      return <div className="avail-time" key={time} >
        <span className="avail-time-caption">{time}</span>
      </div>;
    });

  } else if (hour === 9) {
    const timesFor9 = [];
    for (let i = 0; i < timeSlots.length; i++) {
      const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
      if (hour === 7 || hour === 8) {
        timesFor9.push(timeSlots[i]);
      }
    }

    times = timesFor9.map(time => {
      return <div className="avail-time" key={time} >
        <span className="avail-time-caption">{time}</span>
      </div>;
    });

  } else if (hour === 10) {
    const timesFor10 = [];
    for (let i = 0; i < timeSlots.length; i++) {
      const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
      if (hour === 8 || timeSlots[i] === '7:30 PM' || timeSlots[i] === '7:45 PM') {
        timesFor10.push(timeSlots[i]);
      }
    }

    times = timesFor10.map(time => {
      return <div className="avail-time" key={time} >
        <span className="avail-time-caption">{time}</span>
      </div>;
    });

  } else {
    times = props.availTimeSlots.map(time => {
      return <div className="avail-time" key={time} >
        <span className="avail-time-caption">{time}</span>
      </div>;
    });
  }

  return (
    <div className="availTimes-wrapper">
      <span>
        <div className="availTimes-caption-wrapper">
          <span className="availTimes-caption">Select a time:</span>
        </div>
        <div className="times-wrapper">
          {times}
        </div>
      </span>
    </div>
  );
};

AvailTimes.propTypes = {
  availTimeSlots: PropTypes.array,
  time: PropTypes.string,
};

export default AvailTimes;
