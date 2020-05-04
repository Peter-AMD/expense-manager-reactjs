import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Expense from './item/Item';
import { fetchExpenseList } from '../../../redux/actions';

class List extends Component{

  componentDidMount() {
    this.props.fetchExpenseList();
  }
  render() {
    console.log('expenses', this.props.expenses);
    return (
      <Fragment>
        {
          this.props.expenses.map(expense => {
          return <Expense key={expense.id} {...expense} />
          })
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { expenses } = state;
  return { expenses };
}
export default connect(mapStateToProps, { fetchExpenseList })(List);