import React from 'react';

import Calendar from './Calendar.jsx';
import CalendarCopy from './CalendarCopy.jsx';

// class Reservations extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return(
//       <div>Hello World</div>
//     );
//   }
// }

const Reservations = () => {
  return (
    <div>
      <Calendar />
      <CalendarCopy />
    </div>
  );
};

export default Reservations;
