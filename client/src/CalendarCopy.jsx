import React from 'react';
import moment from 'moment';
import dateFns from 'date-fns';

import '../../public/styles.css';

class CalendarCopy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDays: moment.weekdaysShort(),
      currentMonth: new Date(),
      selectedDay: moment(),
    };

    this.prevMonthClick = this.prevMonthClick.bind(this);
    this.nextMonthClick = this.nextMonthClick.bind(this);
  }

  prevMonthClick() {
    let todayDate = moment().format('MMMM YYYY');
    if (dateFns.format(this.state.currentMonth, 'MMMM YYYY') !== todayDate) {
      this.setState({
        currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
      });
    } 
  }

  nextMonthClick() {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  render() {
    let weekDaysName = this.state.weekDays.map((day) => {
        return <th key={day} className="week-day-res">{day}</th>;
    });

    return(
      <div className="res-calendar-wrapper">
        
        <div className="res-month-title">
          <div className="col-start">
            <div className="prev-month" onClick={this.prevMonthClick}></div>
          </div>
          
          <div className="col col-center">
            <span className="res-calendar-nav">{dateFns.format(this.state.currentMonth, 'MMMM YYYY')}</span>
          </div>
          
          <div className="col-end">
            <div className="next-month" onClick={this.nextMonthClick}></div>
          </div>
        </div>

        <table className="reservations-calendar">
          <thead>
            <tr>{weekDaysName}</tr>
          </thead>
          <tbody>
            Month days
          </tbody>
        </table>
      </div>
    );
  }
}

export default CalendarCopy;
