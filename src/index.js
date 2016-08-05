import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/* eslint global-require: "off" */
const render = () => {
  const NextApp = require('./components/App').default;
  ReactDOM.render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('app'));
};

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}

render();
