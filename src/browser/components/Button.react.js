import Link from '../components/Link.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import color from 'color';
import { colors, em, media } from '../globals';
import { Link as ScrollLink } from 'react-scroll';

const RadiumScrollLink = Radium(ScrollLink);

export const BUTTON_KIND_PRIMARY = 'primary';
export const BUTTON_KIND_SECONDARY = 'secondary';
export const BUTTON_KIND_GHOST_LIGHT = 'ghost_light';
export const BUTTON_KIND_GHOST_DARK = 'ghost_dark';
export const BUTTON_SIZE_NORMAL = 'normal';
export const BUTTON_SIZE_LARGE = 'large';

@Radium
export default class Button extends PureComponent {

  static propTypes = {
    blendColor: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    kind: PropTypes.oneOf([
      BUTTON_KIND_PRIMARY,
      BUTTON_KIND_SECONDARY,
      BUTTON_KIND_GHOST_LIGHT,
      BUTTON_KIND_GHOST_DARK
    ]).isRequired,
    link: PropTypes.string,
    scrollLink: PropTypes.string,
    size: PropTypes.oneOf([
      BUTTON_SIZE_NORMAL,
      BUTTON_SIZE_LARGE
    ]).isRequired,
    style: PropTypes.object,
    type: PropTypes.string
  };

  static defaultProps = {
    kind: BUTTON_KIND_PRIMARY,
    size: BUTTON_SIZE_NORMAL,
    type: null
  };

  render() {
    const {
      blendColor,
      children,
      disabled,
      kind,
      link,
      scrollLink,
      size,
      style,
      type,
      ...rest
    } = this.props;
    const btnStyles = [
      buttonStyles,
      buttonKindStyles[kind],
      buttonSizeStyles[size],
      !disabled && { ':focus': buttonFocusStyles[kind] },
      !disabled && { ':hover': buttonHoverStyles[kind] },
      blendColor && { ':hover': { color: blendColor } },
      disabled && buttonDisabledStyles[kind],
      style
    ];

    if (link || scrollLink) {
      if (link) {
        return (
          <Link to={link} key="button" style={btnStyles} {...rest}>
            {children}
          </Link>
        );
      }

      return (
        <RadiumScrollLink to={scrollLink} key="button" duration={1800} smooth style={btnStyles} {...rest}>
          {children}
        </RadiumScrollLink>
      );
    }

    return (
      <button disabled={disabled} key="button" style={btnStyles} type={type} {...rest}>
        {children}
      </button>
    );
  }
}

const buttonStyles = {
  padding: `${em(14, 20)} ${em(23, 20)} ${em(12, 20)}`,
  fontSize: em(20),
  display: 'inline-block',
  position: 'relative',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const buttonsGhostStyles = {
  background: 'transparent',
};

const buttonsHoverStyles = {
  transition: 'all 0.3s'
};

const buttonKindStyles = {
  [BUTTON_KIND_PRIMARY]: {
    boxShadow: '0 4px 2px rgba(0, 0, 0, 0.06)',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: 'white',
    ':focus': {},
    ':hover': {}
  },
  [BUTTON_KIND_SECONDARY]: {
    background: 'none',
    border: 0,
    fontWeight: 600,
    padding: '12px 24px',
    ':focus': {},
    ':hover': {}
  },
  [BUTTON_KIND_GHOST_LIGHT]: {
    ...buttonsGhostStyles,
    borderColor: colors.white,
    color: colors.white,
    ':focus': {},
    ':hover': {}
  },
  [BUTTON_KIND_GHOST_DARK]: {
    ...buttonsGhostStyles,
    borderColor: colors.black,
    color: colors.black,
    ':focus': {},
    ':hover': {}
  }
};

const buttonFocusStyles = {
  [BUTTON_KIND_PRIMARY]: {},
  [BUTTON_KIND_SECONDARY]: {
    color: colors.primary
  }
};

const buttonHoverStyles = {
  [BUTTON_KIND_PRIMARY]: {
    backgroundColor: color(colors.primary).darken(7).toString(),
    borderColor: color(colors.primary).darken(7).toString(),
  },
  [BUTTON_KIND_SECONDARY]: {
    color: colors.primary
  },
  [BUTTON_KIND_GHOST_LIGHT]: {
    ...buttonsHoverStyles,
    color: colors.black,
    background: colors.white,
  },
  [BUTTON_KIND_GHOST_DARK]: {
    ...buttonsHoverStyles,
    color: colors.white,
    background: colors.black
  }
};

const buttonDisabledStyles = {
  [BUTTON_KIND_PRIMARY]: {
    backgroundColor: '#aaa',
    borderColor: '#aaa'
  },
  [BUTTON_KIND_SECONDARY]: {}
};

const buttonSizeStyles = {
  [BUTTON_SIZE_NORMAL]: {},
  [BUTTON_SIZE_LARGE]: {
    borderWidth: '3px',
    fontSize: '28px',
    [media.m]: {
      fontSize: '34px',
    }
  }
};
