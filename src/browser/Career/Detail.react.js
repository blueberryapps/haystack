import ContactForm from '../components/ContactForm.react';
import Container from '../components/Container.react';
import Desc from './detail/Desc.react';
import {Heading, HeadingHighlight, HeadingLine} from '../components/heading';
import Helmet from 'react-helmet';
import Image from '../components/Image.react';
import Layout from '../layouts/General.react';
import React, { PropTypes as RPT, PureComponent } from 'react';
import SlashBox from '../components/SlashBox.react';
import Team from './detail/Team.react';
import Video from './detail/Video.react';
import {colors} from '../globals';
import {connect} from 'react-redux';
import NotFound from '../NotFound';

@connect((state) => ({positions: state.career}))
export default class Detail extends PureComponent {

  static propTypes = {
    match: React.PropTypes.object,
    positions: React.PropTypes.object.isRequired,
  }

  render() {
    console.log(this.props)
    const {match: { params: { positionId} }, positions} = this.props;
    const position = positions.find(obj => (obj.url === positionId));

    if (!position) {
      return <NotFound />
    }

    const lang = position.place !== 'Anywhere' ? 'cs' : 'en';
    const suffix = lang === 'cs' ? `_${lang}` : '';

    return (
      <Layout>
        <Image src={require('./images/bg-intro.jpg')}>
          <Container kind="normal" style={styles.intro.container}>
            <Helmet title={position.name} />
            <Heading kind="h3" style={styles.intro.heading}>
              {position.name}
            </Heading>
          </Container>
        </Image>

        <Container kind="slim" style={styles.perex.container}>
          <img
            src={require(`./images/position-${position.banner}.jpg`)}
            style={styles.perex.image}
          />
          <SlashBox place={position.place}>
            <p>{position.perex}</p>
          </SlashBox>
        </Container>

        <Desc position={position} lang={lang} />
        <Team position={position} lang={lang} />
        <Video position={position} lang={lang} />

        <Container kind="normal" style={styles.form.container}>
          <ContactForm displayCvInput suffix={suffix} />
        </Container>
      </Layout>
    );
  }
}

const styles = {
  intro: {
    container: {
      paddingTop: '160px',
      paddingRight: '24px',
      paddingBottom: '70px',
      paddingLeft: '24px',
    },
    heading: {
      marginTop: 0,
      marginBottom: 0,
      color: colors.white
    },
  },
  perex: {
    container: {
      margin: '95px auto 110px',
      fontWeight: '400'
    },
    image: {
      margin: '0 0 70px',
      maxWidth: '100%',
      display: 'block'
    }
  },
  form: {
    container: {
      margin: '50px auto 138px'
    },
  },
};
