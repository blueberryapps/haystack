import ErrorHeading from './Heading.react';
import ErrorPage from './Page.react';
import React, { PropTypes as RPT } from 'react';
import translate from 'ts-translate';

const NotFound = ({ location: { pathname }, msg, staticContext }) => {
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
  location: RPT.shape({
    pathname: RPT.string.isRequired
  }),
  msg: RPT.func.isRequired,
  staticContext: RPT.shape({
    status: RPT.number
  })
};

NotFound.defaultProps = {
  location: { pathname: '' },
  staticContext: {}
};


export default translate('errors.page404')(NotFound);
