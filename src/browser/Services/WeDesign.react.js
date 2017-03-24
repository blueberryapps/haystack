import GraphicsDesign from '../components/cards/GraphicsDesign.react';
import InteractionDesign from '../components/cards/InteractionDesign.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import { media } from '../globals';

@Radium
export default class WeDesign extends PureComponent {

  render() {
    return (
      <div style={styles.wrapper}>
        <InteractionDesign />
        <GraphicsDesign />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#00A7D7',
    padding: '0 0 64px',
    [media.m]: {
      minHeight: '480px'
    }
  }
};
