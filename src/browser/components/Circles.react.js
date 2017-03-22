import Heading from './heading/Heading.react';
import Icon from './Icon.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, rem } from '../globals';

@translate()
@Radium
export default class HowWeWorkList extends PureComponent {

  static propTypes = {
    list: PropTypes.array.isRequired,
    msg: React.PropTypes.func.isRequired,
    translationPath: PropTypes.string
  }

  renderItem(item) {
    const { msg, translationPath } = this.props;

    return (
      <li key={item} style={styles.item}>
        <Icon
          color={colors.primary}
          kind={item}
          size={100}
          style={styles.icon.base}
          wrapperStyle={styles.icon.wrapper}
        />
        <Heading kind="h3" style={styles.heading}>{msg(`${translationPath}.${item}.heading`)}</Heading>
        <p style={styles.text}>{msg(`${translationPath}.${item}.text`)}</p>
      </li>
    );
  }

  render() {
    const { list } = this.props;

    return (
      <ul style={styles.list}>
        {list.map(item => this.renderItem(item))}
      </ul>
    );
  }

}

const styles = {
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyle: 'none',
  },

  item: {
    marginBottom: rem(30),
    width: '23%',
    textAlign: 'center',
  },

  icon: {
    wrapper: {
      margin: '0 auto',
      width: '146px',
      height: '146px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.grayLightest,
      borderRadius: '50%',
    },
    base: {
      width: '80%',
      height: 'auto',
      maxWidth: '100px',
      verticalAlign: 'midddle',
    },
  },

  heading: {
    marginTop: rem(34),
    marginBottom: rem(23),
    fontWeight: 700,
    fontSize: `${rem(18)} !important`
  }
};
