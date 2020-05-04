import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link  } from 'react-router-dom';
import moment from 'moment';

import { postExpense as addExpense } from '../../../redux/actions';
import './style.scss'

class AddExpense extends Component {

  getExpenseLength = async () => {
    const expenses = await this.props.fetchExpenseList();

    return expenses.length;
  }

  renderFieldsWrapper = (field, label) => {
    return (
      <div className={`ui labeled input ${field.type}`}>
        <div className="ui label">
        {label}
        </div>
        {field}
      </div>
    );
  }

  renderInput = ({ input, label }) => this.renderFieldsWrapper(<input {...input} autoComplete="off" />, label);

  renderTextArea = ({ input, label }) => this.renderFieldsWrapper(<textarea className="text-area" {...input}></textarea>, label);

  onSubmit = (formValues) => {
    this.props.addExpense({
      id: Math.floor(Math.random() * 99),
      expenseTitle: formValues.expenseName,
      categoryId: '1',
      categoryName: 'Food and Restaurant',
      amount: formValues.amount,
      date: moment().format('MMMM Do YYYY'),
    });
    return this.props.history.push('../expenses')
  }

  render() {
    return (
      <div className="ui container addExpense-wrapper">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
          <h3 className="ui dividing header">
            <Link className="" to="../expenses">Cancel</Link>
            <p className="expenses">Expenses</p>
            <button className="ui button submit-button">Done</button>
          </h3>
          <Field name="amount" component={this.renderInput} label="amount"></Field>
          <Field name="expenseName" component={this.renderInput} label="Name"></Field>
          <Field name="note" component={this.renderTextArea} label="Note"></Field>
        </form>
      </div>
    );
  }
}
const validate = ({ amount, expenseName, note }) => {
  const errors = {}
  if (!amount) errors.amount = 'Please enter a amount';
  if (!expenseName) errors.expenseName = 'Please enter a name';
  if (!note) errors.note = 'Please enter a note';
  
  return errors;
};
const connectAddExpense = connect(null, { addExpense })(AddExpense)
export default reduxForm({
  form: 'addExpense',
  validate,
})(connectAddExpense);