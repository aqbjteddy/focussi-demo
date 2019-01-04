import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App/index.js';
import Dashboard from './routes/Dashboard/index.js';
import Orders from './routes/Orders/index.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>          
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/orders" component={Orders}/>
        </Switch>
      </App>
  </Router>
  );
}

export default RouterConfig;
