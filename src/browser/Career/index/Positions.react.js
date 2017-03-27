import Container from '../../components/Container.react';
import { Heading, HeadingHighlight } from '../../components/heading';
import Link from '../../components/Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors } from '../../globals';
import { Flex, Box } from 'radium-flex'; // eslint-disable-line import/named
import { ListUnstyled, ListUnstyledItem } from '../../components/listUnstyled/index';
import { connect } from 'react-redux';

@connect(state => ({ positions: state.career }))
@translate('career.positions')
@Radium
export default class Positions extends PureComponent {

  static propTypes = {
    cnt: RPT.func.isRequired,
    msg: RPT.func.isRequired,
    positions: RPT.array.isRequired
  }

  renderPositions(group, positions, key) {
    const { cnt, msg } = this.props;

    return (
      <Box xs={12} sm={4} key={key}>
        <Heading kind="h6" style={styles.positions.subheading}>
          {msg(positions.get(group[0]).category)}
        </Heading>
        <ListUnstyled style={styles.positions.list}>
          {group.map(name => (
            <ListUnstyledItem key={name}>
              <Link to={`career/${positions.get(name).url}`}>
                {positions.get(name).name}
                {positions.get(name).place !== 'Anywhere' && ' ' &&
                  cnt('czechOnly')
                }
              </Link>
            </ListUnstyledItem>
          ))}
        </ListUnstyled>
      </Box>
    );
  }

  render() {
    const { msg, positions } = this.props;

    const groups = {};
    positions.forEach((position, index) => {
      if (groups[position.category] === undefined) {
        groups[position.category] = [index];
      } else {
        groups[position.category].push(index);
      }
    });

    return (
      <Container kind="slim" style={styles.positions.container}>
        <Heading kind="h3" style={styles.positions.heading}>
          <span>{msg('heading.text_1')} </span>
          <HeadingHighlight style={styles.positions.heading.text}>
            {msg('heading.text_2')}
          </HeadingHighlight>
        </Heading>

        <Flex>
          {Object.keys(groups).map(group =>
            this.renderPositions(groups[group], positions, group))
          }
        </Flex>
      </Container>
    );
  }
}

const styles = {
  positions: {
    container: {
      fontSize: '18px',
      textAlign: 'center'
    },
    heading: {
      marginTop: 0,
      marginBottom: '100px',
      textAlign: 'left'
    },
    subheading: {
      textAlign: 'inherit'
    },
    list: {
      fontWeight: '600',
      textDecoration: 'underline',
      color: colors.primary
    }
  }
};
