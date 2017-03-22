import Container from './Container.react';
import Copyright from './footer/Copyright.react';
import React, { PureComponent } from 'react';
import Section from './footer/Section.react';
import translate from 'ts-translate';
import { workplaces } from '../homepage/locations/Workplaces.react';

const menu = [
  {
    key: 'company',
    items: [
      {
        key: 'work',
        to: '/our-work'
      },
      {
        key: 'team',
        to: '/our-team'
      },
      {
        key: 'contacts',
        to: '/contacts'
      }
    ]
  },
  {
    key: 'social',
    items: [
      {
        key: 'facebook',
        target: '_blank',
        to: 'https://www.facebook.com/Blueberry.cz'
      },
      {
        key: 'twitter',
        target: '_blank',
        to: 'http://twitter.com/blueberry_cz'
      },
      {
        key: 'linkedIn',
        target: '_blank',
        to: 'https://www.linkedin.com/company/897163'
      }
    ]
  },
  {
    key: 'contact',
    items: workplaces
  }
];

@translate()
export default class Footer extends PureComponent {
  render() {
    return (
      <footer style={styles.wrapper}>
        <Container style={styles.container}>
          {menu.map(section => <Section key={section.key} content={section} />)}
          <Copyright />
        </Container>
      </footer>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#333',
    padding: '48px 32px 24px'
  },

  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    position: 'relative'
  },
};
