import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';

export default(
  <Route path="/" component={App}>
        <IndexRoute  component={LoginPage} />
        <Route path="home" component={HomePage} />
  </Route>
);
