import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { COLOR_WHITE, COLOR_GREY_LIGHTER, COLOR_BLUE_GRADIENT_START, COLOR_BLUE_GRADIENT_END } from '../colors';

@Radium
export default class Loading extends PureComponent {

  static propTypes = {
    children: PropTypes.node
  };

  backgroundDidMount = (component) => {
    this.setState({ backgroundComponent: component }, this.handleResize);
  }

  handleResize = () => {
    const { backgroundComponent } = this.state;

    if (backgroundComponent) {
      const backgroundElement = ReactDOM.findDOMNode(backgroundComponent);
      const backgroundRect = backgroundElement.getBoundingClientRect();

      this.setState({ backgroundHeight: backgroundRect.height });
    }
  }

  render() {
    const { children } = this.props;
    const { backgroundHeight } = this.state;

    return (
      <div style={styles.container}>
        {children}
        <div
          ref={this.backgroundDidMount}
          style={[
            styles.circleBackground,
            { width: backgroundHeight ? `${backgroundHeight}px` : 'auto' }
          ]}
        >
          <div style={styles.circleContainer}>
            <div style={[styles.circle, styles.circleOuter]} />
            <div style={[styles.circle, styles.circleInner]} />
            <div style={[styles.circle, styles.circleMask]} />
          </div>
        </div>
      </div>
    );
  }
}

const circleMaskKeyFrames = Radium.keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  }
});

const styles = {
  container: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    background: COLOR_WHITE,
    zIndex: '10'
  },
  circleBackground: {
    width: '30%',
    height: '30%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundImage: `radial-gradient(farthest-corner at 50% 50%,${COLOR_GREY_LIGHTER} 40%, ${COLOR_WHITE} 70%)`
  },
  circleContainer: {
    width: '90%',
    height: '90%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '50%'
  },
  circle: {
    borderRadius: '50%',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  },
  circleInner: {
    top: '20px',
    right: '20px',
    bottom: '20px',
    left: '20px',
    background: COLOR_WHITE,
    zIndex: '3'
  },
  circleOuter: {
    backgroundImage: `linear-gradient(90deg, ${COLOR_BLUE_GRADIENT_START}, ${COLOR_BLUE_GRADIENT_END})`,
    zIndex: '1'
  },
  circleMask: {
    backgroundImage: `linear-gradient(126deg, transparent 50%, ${COLOR_WHITE} 50%), linear-gradient(90deg, ${COLOR_WHITE} 50%, transparent 50%)`,
    top: '-1px',
    right: '-1px',
    bottom: '-1px',
    left: '-1px',
    zIndex: '2',
    transition: 'all 1s',
    animation: `${circleMaskKeyFrames} 1s linear 0s infinite`
  }
};
