import React from 'react';

const NotFound = ({ path }) => (
  <div>
    <h1>404: Needle ({path}) in Haystack not found :(</h1>
    You can redirect to <a href="/">home</a>.
  </div>
)

export default NotFound;
