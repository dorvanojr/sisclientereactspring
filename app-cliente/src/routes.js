import React from 'react';
import { Route, Switch } from 'react-router-dom';
import login from './components/Login';
import App from './components/App';
import AppC from './components/AppC'
export const Routes = () => (
    <Switch>
      <Route exact path='/' component={login} />
      <Route path="/home" component={App} />
      <Route path="/leitura" component={AppC} />
    </Switch>
);
export default Routes;
