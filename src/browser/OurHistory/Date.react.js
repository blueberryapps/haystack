import React from 'react';
import moment from 'moment';

const Date = ({ value }) => (
  <div>{moment({ ...value, month: value.month - 1 }).format('MM/DD/YYYY')}</div>
);

Date.propTypes = {
  value: React.PropTypes.shape({
    day: React.PropTypes.number,
    moth: React.PropTypes.number,
    year: React.PropTypes.number
  })
};

export default Date;
