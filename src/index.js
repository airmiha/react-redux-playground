import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import style from './main.css';

/* eslint global-require: "off", curly: "error" */

let mode;
let word;
let render = '';

const actions = {
  setMode(newMode) {
    mode = newMode;
    render();
  },

  setWord(newWord) {
    word = newWord;
    mode = 'display';
    render();
  },
};

render = () => {
  const NextApp = require('./components/Hello').default;
  ReactDOM.render(
    <AppContainer>
      <NextApp word={word} mode={mode} actions={actions} className={style.style} />
    </AppContainer>,
    document.getElementById('app'));
};

if (module.hot) {
  module.hot.accept('./components/Hello', () => {
    render();
  });
}

render();
