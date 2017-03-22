import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const RadiumLink = Radium(RouterLink);

@Radium
export default class Link extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ]),
    scrollTo: PropTypes.string,
    to: PropTypes.string
  }

  render() {
    const { scrollTo, children, to, ...rest } = this.props;

    if (scrollTo) {
      return (
        <ScrollLink
          duration={1800}
          smooth
          style={styles}
          to={scrollTo}
          {...rest}
        >
          {children || null}
        </ScrollLink>
      );
    }

    return (
      <RadiumLink to={to || '/'} {...rest}>
        {children || null}
      </RadiumLink>
    );
  }

}

const styles = {
  cursor: 'pointer'
};
