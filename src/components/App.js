import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import store from '../store/store';

import HomePage from './HomePage';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/404">
          <h2>Go for 404</h2>
        </Link>
        <Switch>
          <Route exact path="/404" component={PageNotFound}>
          </Route>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;