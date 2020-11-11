import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/store';

import HomePage from './HomePage';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/film/:id" render={(props) => <HomePage {...props} />} />  
          <Route path="/search" render={(props) => <HomePage {...props} />} />  
          <Route path="*" component={PageNotFound} />  
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;