import React from 'react';
import HelloContainer from './Hello/HelloContainer';
import { Router, Route, hashHistory } from 'react-router';

/* eslint  react/prefer-es6-class: "off" */
const App = () =>
(
  <Router history={hashHistory}>
    <Route path="/" component={HelloContainer} />
  </Router>
);

export default App;
