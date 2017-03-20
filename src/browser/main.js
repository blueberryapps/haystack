import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';
import BrowserProvider from './BrowserProvider.react';

const renderApp = () => {
  ReactDOM.render(
    <BrowserProvider>
      <App />
    </BrowserProvider>,
    window.document.getElementById('app')
  );
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(App, renderApp);
}

renderApp();
