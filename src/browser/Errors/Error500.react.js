import ErrorHeading from './Heading.react';
import ErrorPage from './Page.react';
import React, { PropTypes as RPT } from 'react';
import translate from 'ts-translate';

const Error500 = ({ staticContext, msg }) => {
  staticContext.status = 500; // eslint-disable-line no-param-reassign

  return (
    <ErrorPage type="500">
      <ErrorHeading
        blackTitle={msg('blackTitle')}
        blueTitle={msg('blueTitle')}
        subtitle={msg('subtitle')}
        subtitleOffset={160}
      />
    </ErrorPage>
  );
};

Error500.propTypes = {
  msg: RPT.func.isRequired,
  staticContext: RPT.shape({
    status: RPT.number
  })
};

Error500.defaultProps = {
  staticContext: {}
};


export default translate('errors.page500')(Error500);
