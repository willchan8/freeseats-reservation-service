import React from 'react';

import '../../public/styles.css';

class PartySize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const size = [];
    for (let i = 1; i <= 20; i++) {
      size.push(i);
    }

    const partySize = size.map((party) => {
      if (party === 2) {
        return <option key={party} value="" selected>{party}</option>;
      }
      return <option key={party} value={party}>{party}</option>;
    });

    return (
      <div className="party-size-wrapper">
        <div className="party-size-title">Party Size</div>
        <select className="party-size-list">
          {partySize}
        </select>
      </div>
    );
  }
}

export default PartySize;
