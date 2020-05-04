import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchSection from '../searchSection/SearchSection';
import ExpenseList from './list/List';

class ExpensesUI extends Component{
  render() {
    return (
      <div className="expenses-wrapper ui container">
        <SearchSection>
          <Link className="ui teal button" to="./expenses/add">Add new</Link>
        </SearchSection>
        <ExpenseList />
      </div>
   );
 } 
}

export default ExpensesUI;