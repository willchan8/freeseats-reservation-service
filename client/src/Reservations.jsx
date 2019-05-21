import React from 'react';

import Calendar from './Calendar.jsx';

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="reservation-title-wrapper">
          <span className=""></span>
        </div>
        <Calendar />
      </div>
    );
  }
}

// const Reservations = () => {
//   return (
//     <div>
//       <Calendar />
//     </div>
//   );
// };

export default Reservations;
