import React from 'react';

import '../../public/styles.css';

class PartySize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 2,
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleSizeChange(e) {
    this.props.handleSize(e);
    this.setState({
      size: e.target.value,
    });
  }

  render() {
    const size = [];
    for (let i = 1; i <= 20; i++) {
      size.push(i);
    }

    const partySize = size.map((party) => {
      return <option key={party} value={party}>{party}</option>;
    });

    return (
      <div className="party-size-wrapper">
        <div className="party-size-title">Party Size</div>
        <select className="party-size-list" value={this.state.size} onChange={this.handleSizeChange}>
          {partySize}
        </select>
      </div>
    );
  }
}

export default PartySize;
