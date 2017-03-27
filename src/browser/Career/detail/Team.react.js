import Container from '../../components/Container.react';
import {Heading, HeadingSmall, HeadingHighlight} from '../../components/heading';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import Team from '../../OurTeam/Team.react';
import translate from 'ts-translate';
import {colors, em} from '../../globals';
import {members} from '../../OurTeam/members';

@translate('career.detail.team')
@Radium
export default class TeamOverview extends PureComponent {

  static propTypes = {
    lang: RPT.string.isRequired,
    msg: RPT.func.isRequired,
    position: RPT.object.isRequired,
  }

  render() {
    const {msg, lang, position} = this.props;

    const team = [];
    position.team_members.forEach((id) => {
      if (team.length === 0) {
        team[0] = members.find((member) => (member.image === id));
      } else {
        team.push(members.find((member) => (member.image === id)));
      }
    });

    return (
      <Container kind="slim" style={styles.team.container}>
        <Heading kind="h3" style={styles.team.heading}>
          <HeadingSmall style={styles.team.heading.small}>
            {msg('heading.small')}
          </HeadingSmall>
          <span> {msg('heading.text_1')} </span>
          <HeadingHighlight>
            {msg('heading.text_2')}
          </HeadingHighlight>
        </Heading>
        <p style={styles.team.p}>{position.team_desc}</p>
        <Team members={team} />
      </Container>
    );
  }
}

const styles = {
  team: {
    container: {
      margin: '90px auto 0',
      fontWeight: '400',
      fontSize: '18px',
    },
    p: {
      marginBottom: '40px',
      color: colors.gray
    },
    heading: {
      small: {
        small: {
          fontSize: em(28, 65),
          top: em(3, 28),
          left: em(42, 28)
        },
        line: {
          marginLeft: em(11, 28),
          width: em(48, 28)
        }
      }
    }
  }
};
