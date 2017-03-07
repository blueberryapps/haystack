import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';

const renderApp = () => {
  ReactDOM.render(
    <App />,
    window.document.getElementById('app')
  );
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(App, renderApp);
}

renderApp();
