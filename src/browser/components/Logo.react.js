import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';

@Radium
export default class Logo extends PureComponent {

  static propTypes = {
    color: PropTypes.string.isRequired,
    trademark: PropTypes.bool
  }

  static defaultProps = {
    color: 'white',
    trademark: true
  }

  render() {
    const { color, trademark, ...rest } = this.props;
    const viewBox = '0 -2.1 320 68.1';

    return (
      <svg
        preserveAspectRatio="xMinYMin meet"
        style={styles.logo}
        version="1.1"
        viewBox={viewBox}
        {...rest}
      >
        <g fill={color} style={styles.svgGroup}>
          <path d="M9.8-2.1h5.5v14.7c4.3-4,9-5.9,14.4-5.9c5.3,0,10.2,2.1,14,5.9c3.8,3.9,5.9,9,5.9,14.4s-2.1,10.6-5.9,14.4s-8.7,6-14,6 c-11.4,0-19.9-8.6-19.9-22.3c0-0.8,0-1.7,0.1-2.6L9.8-2.1L9.8-2.1L9.8-2.1z M29.6,41.7c8.1,0,14.5-6.6,14.5-14.7 s-6.4-14.8-14.5-14.8c-8.1,0-14.5,6.7-14.5,14.8C15.1,35.3,21.5,41.7,29.6,41.7z" />
          <path d="M53.3-2.1h5.6v48.3h-5.6V-2.1z" />
          <path d="M95.2,30.4c0,10.4-7,16.9-15.9,16.9c-9,0-16-6.7-16-16.9V7.7h5.5v22.9c0,6.8,4.7,11.2,10.4,11.2 c5.9,0,10.5-4.4,10.5-11.2V7.7h5.5V30.4z" />
          <path d="M118.9,47.3c-5.3,0-10.4-2.1-14.1-5.9c-3.8-3.8-5.9-9-5.9-14.4s2.1-10.5,5.9-14.4c3.8-3.8,8.7-5.9,14.1-5.9 c5.3,0,10.2,2.1,14,5.9s5.9,9,5.9,14.4v2h-34c1.2,7.8,7,12.9,14.3,12.9c3.9,0,7.2-1.5,10.5-4.5l3.9,3.7 C129.3,45.2,124.5,47.3,118.9,47.3z M133.1,23.7c-2-7.2-7.6-11.5-14.1-11.5c-6.7,0-12.3,4.4-14.1,11.5H133.1z" />
          <path d="M143.1-2.1h5.5v14.7c4.3-4,9-5.9,14.4-5.9c5.3,0,10.2,2.1,14,5.9c3.8,3.9,5.9,9,5.9,14.4s-2.1,10.6-5.9,14.4s-8.7,6-14,6 c-11.4,0-19.9-8.6-19.9-22.3c0-0.8,0-1.7,0.1-2.6L143.1-2.1L143.1-2.1L143.1-2.1z M162.8,41.7c8.1,0,14.5-6.6,14.5-14.7 s-6.5-14.8-14.5-14.8s-14.5,6.7-14.5,14.8C148.4,35.3,154.8,41.7,162.8,41.7z" />
          <path d="M206.5,47.3c-5.3,0-10.4-2.1-14-5.9c-3.8-3.8-5.9-9-5.9-14.4s2.1-10.5,5.9-14.4c3.8-3.8,8.7-5.9,14-5.9 c5.2,0,10.2,2.1,14,5.9s5.9,9,5.9,14.4v2h-34c1.2,7.8,7,12.9,14.3,12.9c3.8,0,7.2-1.5,10.5-4.5l3.9,3.7 C216.8,45.2,211.9,47.3,206.5,47.3z M220.6,23.7c-2-7.2-7.6-11.5-14.1-11.5c-6.7,0-12.3,4.4-14.1,11.5H220.6z" />
          <path d="M230.5,26.9c0-12.4,5.1-18.3,17.3-19.2v5.5c-8.1,0.9-11.3,4.8-11.3,13.2v19.8h-6.1L230.5,26.9L230.5,26.9z" />
          <path d="M248.5,26.9c0-12.4,5.1-18.3,17.3-19.2v5.5c-8.1,0.9-11.3,4.8-11.3,13.2v19.8h-6C248.5,46.2,248.5,26.9,248.5,26.9z" />
          <path d="M297.2,7.7v20.4c0,4.1-0.1,7.2-2,9.5c-2.3,3-5.3,4.4-8.6,4.4c-6.9,0-11.3-4.8-11.3-14V7.8h-5.1v20.4 c0,6.1,0.3,10.6,5.2,15.1c2.8,2.5,7.2,4.3,10.9,4.3s7.2-1.6,10.8-4.7c0,0.5,0,0.8,0,1.3c0,9.4-3.7,15.1-10.8,16.7V66 c11.1-2.1,16.6-10.2,16.6-24.9V7.8L297.2,7.7L297.2,7.7L297.2,7.7z" />
          <path d="M9.7,46.2c-5.4,0-9.7,4.4-9.7,9.7c0,5.4,4.4,9.7,9.7,9.7c5.4,0,9.7-4.4,9.7-9.7S15.1,46.2,9.7,46.2z M9.7,61.2 c-2.9,0-5.3-2.3-5.3-5.3c0-2.9,2.3-5.3,5.3-5.3c2.9,0,5.3,2.3,5.3,5.3C15,58.8,12.7,61.2,9.7,61.2z" />
        </g>
        {trademark &&
          <g fill={color} style={styles.svgGroup}>
            <path d="M309.5-0.7v5.4H308v-5.4h-2.1V-2h5.6v1.3H309.5z" />
            <path d="M318.5,4.7V0.2L316.8,4h-1L314,0.2v4.5h-1.4V-2h1.7l2,4l2-4h1.7v6.7C320,4.7,318.5,4.7,318.5,4.7z" />
          </g>
        }
      </svg>
    );
  }
}

const styles = {
  logo: {
    verticalAlign: 'middle'
  },
  svgGroup: {
    transition: 'fill .2s'
  }
};