import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route component={NotFound} />
      </Switch>

    </Layout>

  </BrowserRouter>
);

export default App;
