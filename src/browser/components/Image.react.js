import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';

@Radium
export default class Image extends PureComponent {

  static propTypes = {
    children: PropTypes.any,
    key: PropTypes.string,
    src: PropTypes.string,
    style: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ])
  }

  renderImage() {
    const { key, src, style } = this.props;

    return <img key={key} src={src} style={style} {...this.props} />;
  }

  renderImageWithChildren() {
    const { children, key, src, style } = this.props;

    return (
      <div
        key={key}
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

  render() {
    const { children } = this.props;
    const image = children
      ? this.renderImageWithChildren()
      : this.renderImage();

    return image;
  }

}

const styles = {
  background: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
};
