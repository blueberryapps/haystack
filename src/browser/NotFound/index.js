import React, { PropTypes as RPT } from 'react';

const NotFound = ({ location: { pathname }, staticContext }) => {
  staticContext.status = 404; // eslint-disable-line no-param-reassign

  return (
    <div>
      <h1>404: Needle {pathname} not found in Haystack :(</h1>
      You can redirect to <a href="/">home</a>.
    </div>
  );
};

NotFound.propTypes = {
  location: RPT.shape({
    pathname: RPT.string
  }),
  staticContext: RPT.shape({
    status: RPT.number
  })
};

NotFound.defaultProps = {
  location: { pathname: '' },
  staticContext: {}
};


export default NotFound;
