import React from 'react';
import logo from '../../assets/images/haystack_logo.png';

const App = () => (<button onClick={e => window.console.log(e)}>Haystack<img alt="logo" src={logo} /></button>);

export default App;
