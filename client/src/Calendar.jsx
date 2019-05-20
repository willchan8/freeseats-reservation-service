import React from 'react';
import moment from 'moment';

import '../../public/styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDays: moment.weekdaysShort(),
      firstDayOfMonth: moment(),
      daysInMonth: moment(),
      currentDay: moment(),
      month: moment(),
      prevMonth: moment(),
      nextMonth: moment(),
    };

    this.changeDayClick = this.changeDayClick.bind(this);
    this.changeNextMonthClick = this.changeNextMonthClick.bind(this);
    this.changePrevMonthClick = this.changePrevMonthClick.bind(this);
  }

  firstDayOfMonth() {
    const dateObj = this.state.firstDayOfMonth;
    const firstDay = moment(dateObj).startOf('month').format('d');
    return firstDay;
  }

  daysInMonth() {
    const dateObj = this.state.daysInMonth;
    const monthDays = moment(dateObj).daysInMonth();
    return monthDays;
  }

  currentDay() {
    return this.state.currentDay.format('D');
  }

  getMonth() {
    return this.state.month.format('MMMM YYYY');
  }

  getPrevMonth() {
    return this.state.prevMonth.subtract(1, 'month').format('MMMM YYYY');
  }

  getNextMonth() {
    return this.state.nextMonth.add(1, 'month').format('MMMM YYYY');
  }

  // eslint-disable-next-line class-methods-use-this
  changeDayClick(e) {
    console.log('clicked: ', e);
    // change red hover to day clicked
    // set state of clickedDate
  }

  changePrevMonthClick() {
    console.log('clicked prev month change');
  }

  changeNextMonthClick() {
    console.log('clicked next month change');
  }

  render() {
    // refactor blanks to get prev month last days to insert before 1st day of current month
    const blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={`blank: ${i}`} className="calendar-day-res-empty">{''}</td>,
      );
    }

    const daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      const currentDay = d == this.currentDay() ? 'today' : '';
      daysInMonth.push(
        <td key={d} value={d} onClick={() => this.changeDayClick(d)} className={`calendar-day-res${currentDay}`}>
          {d}
        </td>,
      );
    }

    const totalSlots = [...blanks, ...daysInMonth];
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let weekDaysName = this.state.weekDays.map((day) => {
        return <th key={day} className="week-day-res">{day}</th>;
    });

    let monthDays = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <div className="res-calendar-wrapper">
        
        <div className="res-month-title">
          <span className="prev-month" onClick={this.changePrevMonthClick}></span>
          <span className="res-calendar-nav">{this.getMonth()}</span>
          <span className="next-month" onClick={this.changeNextMonthClick}></span>
        </div>

        <table className="reservations-calendar">
          <thead>
            <tr>{weekDaysName}</tr>
          </thead>
          <tbody>
            {monthDays}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
