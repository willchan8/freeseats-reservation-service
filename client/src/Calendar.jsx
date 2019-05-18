import React from 'react';
import moment from 'moment';

import '../../public/styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDays: moment.weekdaysShort(),
    };
  }

  render() {
    return (
      <div>
        {this.state.weekDays.map((day) => {
          return <th key={day} className="week-day">
            {day}
          </th>;
        })}
      </div>
    );
  }
}

export default Calendar;
