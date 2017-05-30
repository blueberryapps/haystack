import React, { PropTypes as RPT } from 'react';

const Script = ({ src }) => <script src={src} type="text/javascript" />;

Script.propTypes = {
  src: RPT.string.isRequired
};

export default Script;
