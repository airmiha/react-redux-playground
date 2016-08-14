import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

import configureStore from '../stores/configureStore.js';

import { Provider } from 'react-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const App = () =>
(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
);
export default App;
