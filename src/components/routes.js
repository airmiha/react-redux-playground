import React from 'react';
import HelloContainer from './Hello/HelloContainer';
import { Route, IndexRoute } from 'react-router';

import About from './About';
import Repos from './Repos';
import Repo from './Repo';

import Home from './Home';
import Soundcloud from './Soundcloud';
import Callback from './Callback.js';

const routes = () => (
  <Route path="/" component={HelloContainer} >
    <IndexRoute component={Home} />
    <Route path="/repos" component={Repos} >
      <Route path="/repos/:userName/:repoName" component={Repo} />
    </Route>
    <Route path="/about" component={About} />
    <Route path="/soundcloud" component={Soundcloud} />
    <Route path="/callback" component={Callback} />
  </Route>
);

export default routes();
