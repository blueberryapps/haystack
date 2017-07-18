// @flow
import React, { PropTypes as RPT } from 'react';

const NotFound = ({ path }: { path: string }) => (
  <div>
    <h1>404: Needle ({path}) not found in Haystack :(</h1>
    You can redirect to <a href="/">home</a>.
  </div>
);

NotFound.propTypes = {
  path: RPT.string.isRequired,
};

export default NotFound;
