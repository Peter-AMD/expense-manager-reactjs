import React from 'react';

import './style.scss';

export default props => {
  console.log('props', props);
  const editExpense = () => {
    alert('Edit feature not available');
  }
  return (
    <div className="ui middle aligned animated list">
      <div className="item">
        <div className="content">
          <div onClick={editExpense} className="expense-wrapper">
          <div className="title-date">
            <p className="title">{props.expenseTitle}</p>
            <p className="date">{props.date} - {props.categoryName}</p>
          </div>
          <div className="amount">
            <label>${props.amount}</label>
          </div>
        </div>
        </div>
      </div>
    </div>

    
  );
};