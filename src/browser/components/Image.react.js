import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';

@Radium
export default class Image extends PureComponent {

  static propTypes = {
    children: RPT.any,
    alt: RPT.string,
    src: RPT.string,
    style: RPT.oneOf([
      RPT.arrayOf(RPT.object),
      RPT.object
    ])
  }

  render() {
    const { alt, src, style, children } = this.props;
    if (children) {
      return (
        <div
          style={[
            styles.background,
            { backgroundImage: `url(${src})` },
            style
          ]}
        >
          {children}
        </div>
      );
    }

    return <img alt={alt} src={src} style={style} {...this.props} />;
  }

}

const styles = {
  background: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
};
