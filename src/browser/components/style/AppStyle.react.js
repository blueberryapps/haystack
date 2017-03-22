import React, { PureComponent } from 'react';
import { Style } from 'radium';

export default class AppStyle extends PureComponent {

  render() {
    return (
      <div>
        <Style
          rules={{
            'html, body': {
              width: '100%',
              height: '100%',
              margin: 0,
              padding: 0
            },
            body: {
              color: '#111',
              fontFamily: '"Gibson", sans-serif',
              fontSize: '1.05em',
              fontWeight: 300,
              lineHeight: '1.35',
              WebkitFontSmoothing: 'antialiased'
            },
            '#app': {
              width: '100%',
              height: '100%'
            },
            '*:focus': {
              outlineStyle: 'none'
            },
            a: {
              color: 'inherit',
              textDecoration: 'none'
            },
            'form, fieldset': {
              border: 'none'
            },
            'input::-ms-clear, input::-ms-reveal': {
              color: '#07b2a2'
            },
            '.dataInput::-webkit-input-placeholder': {
              color: '#ccc'
            },
            '.dataInput::-moz-placeholder': {
              color: '#ccc'
            },
            '.dataInput:-ms-input-placeholder': {
              color: '#ccc'
            }
          }}
        />
        <Style
          rules={{
            '@font-face': {
              fontFamily: 'Gibson',
              fontWeight: 300,
              src: 'url("/assets/fonts/310E0B_7_0.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/310E0B_7_0.woff2") format("woff2"),url("/assets/fonts/310E0B_7_0.woff") format("woff"),url("/assets/fonts/310E0B_7_0.ttf") format("truetype")'
            }
          }}
        />
        <Style
          rules={{
            '@font-face': {
              fontFamily: 'Gibson',
              fontWeight: 400,
              src: 'url("/assets/fonts/310E0B_4_0.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/310E0B_4_0.woff2") format("woff2"),url("/assets/fonts/310E0B_4_0.woff") format("woff"),url("/assets/fonts/310E0B_4_0.ttf") format("truetype")'
            }
          }}
        />
        <Style
          rules={{
            '@font-face': {
              fontFamily: 'Gibson',
              fontWeight: 600,
              src: 'url("/assets/fonts/310E0B_5_0.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/310E0B_5_0.woff2") format("woff2"),url("/assets/fonts/310E0B_5_0.woff") format("woff"),url("/assets/fonts/310E0B_5_0.ttf") format("truetype")'

            }
          }}
        />
        <Style
          rules={{
            '@font-face': {
              fontFamily: 'Gibson',
              fontWeight: 700,
              src: 'url("/assets/fonts/310E0B_3_0.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/310E0B_3_0.woff2") format("woff2"),url("/assets/fonts/310E0B_3_0.woff") format("woff"),url("/assets/fonts/310E0B_3_0.ttf") format("truetype")'
            }
          }}
        />
      </div>
    );
  }
}
