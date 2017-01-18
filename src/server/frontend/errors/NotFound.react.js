import React from 'react';

const NotFound = ({ path }) => (
  <div>
    <h1>404: Needle ({path}) not found in Haystack :(</h1>
    You can redirect to <a href="/">home</a>.
  </div>
)

export default NotFound;
