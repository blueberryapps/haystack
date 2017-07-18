// @flow
import React, { PropTypes as RPT } from 'react';

const Script = (props: { src: string }) => (
  <script src={props.src} type="text/javascript" />
);

Script.propTypes = {
  src: RPT.string.isRequired,
};

export default Script;
