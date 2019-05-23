import React from 'react';
import PropTypes from 'prop-types';

const Date = (props) => {
  return (
    <div className="date-wrapper">
      <div className="date-title">Date</div>
      <div className="display-date" onClick={props.handleClick} >
        {props.clickedDate}
      </div>
    </div>
  );
};

Date.propTypes = {
  handleClick: PropTypes.func,
  clickedDate: PropTypes.string,
};

export default Date;
