import ErrorHeading from './Heading.react';
import ErrorPage from './Page.react';
import React, { PropTypes as RPT } from 'react';
import translate from 'ts-translate';

const NotFound = ({ msg, staticContext }) => {
  staticContext.status = 404; // eslint-disable-line no-param-reassign

  return (
    <ErrorPage type="404">
      <ErrorHeading
        blackTitle={msg('blackTitle')}
        blueTitle={msg('blueTitle')}
        subtitle={msg('subtitle')}
        subtitleOffset={160}
      />
    </ErrorPage>
  );
};

NotFound.propTypes = {
  msg: RPT.func.isRequired,
  staticContext: RPT.shape({
    status: RPT.number
  })
};

NotFound.defaultProps = {
  staticContext: {}
};


export default translate('errors.page404')(NotFound);
