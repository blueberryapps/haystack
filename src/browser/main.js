// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';
import BrowserProvider from './BrowserProvider.react';

type Module = {
      hot: { accept: (Component: Function, callback: (updatedComponent: Function) => void) => void }
  } | Object;

const renderApp = () => {
  ReactDOM.render(
    <BrowserProvider>
      <App />
    </BrowserProvider>,
    window.document.getElementById('app'),
  );
};

if (module && module.hot && module.hot.accept) {
  (module: Module).hot.accept(App, renderApp);
}

renderApp();
