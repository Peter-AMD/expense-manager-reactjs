import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './landingPage/LandingPage';
import ExpenseMain from './expenses/MainUi';
import AddExpense from './expenses/addExpense/AddExpense';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/expenses" component={ExpenseMain} />
        <Route path="/expenses/add" component={AddExpense} />
      </Switch>
    </Router>
  </div>
);

export default App;