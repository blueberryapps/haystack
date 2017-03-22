import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import { rem } from '../globals';

export const CONTAINER_SLIM = 'slim';

@Radium
export default class Container extends PureComponent {

  static propTypes = {
    children: RPT.any,
    kind: RPT.oneOf([
      CONTAINER_SLIM
    ]),
    style: RPT.oneOf([
      RPT.arrayOf(RPT.object),
      RPT.object
    ]),
    top: RPT.bool
  }

  render() {
    const { children, kind, style, top } = this.props;

    return (
      <div
        style={[
          styles.wrapper,
          style && style.wrapper,
          top && styles.wrapper.top
        ]}
      >
        <div style={styles.holder}>
          <div
            style={[
              styles.container, style && style.container,
              kind && styles.variants[kind],
              style && style
            ]}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    paddingTop: '1px',
    paddingBottom: '1px',
    position: 'relative',
    top: {
      paddingTop: rem(90)
    }
  },
  holder: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1366px'
  },
  container: {
    marginTop: '10%',
    marginRight: 'auto',
    marginBottom: '10%',
    marginLeft: 'auto',
    paddingLeft: '30px',
    paddingRight: '30px',
    maxWidth: '1160px',
  },
  variants: {
    [CONTAINER_SLIM]: {
      maxWidth: '960px'
    },
  }
};
