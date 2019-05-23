import React from 'react';
import PropTypes from 'prop-types';

import '../../public/styles.css';

// can possible refactor PartySize to be stateless functional (might decrease page load time)

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

    // Add 'For' before every option value selected but not show in drop down menu
    // const default = 'For ';
    // return 'For ' + e.target.value;
  }

  render() {
    const size = [];
    for (let i = 1; i <= 20; i++) {
      size.push(i);
    }

    const partySize = size.map(party => <option className="party-size-selected" key={party} value={party}>{party}</option>);

    return (
      <div className="party-size-wrapper">
        <div className="party-size-title">Party Size</div>
        <select className="party-size-list" defaultValue="2" onChange={this.handleSizeChange}>
          {partySize}
        </select>
      </div>
    );
  }
}

PartySize.propTypes = {
  handleSize: PropTypes.func,
  getBtnBack: PropTypes.func,
};

export default PartySize;
