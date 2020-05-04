import { getExpenseList, addExpense } from '../../apis/dummy';

export const fetchExpenseList = () => async dispatch => {
  const expenses = await getExpenseList();
  dispatch({
    type: 'FETCH_EXPENSES',
    payload: expenses,
  });
}

export const postExpense = (expense) => async dispatch => {
  const expenses = await addExpense(expense);

  dispatch({
    type: 'ADD_EXPENSE',
    payload: expenses,
  });
}

export const searchExpenseList = keyword => async dispatch => {
  const expenses = await getExpenseList();
  
  dispatch({
    type: 'SEARCH_EXPENSES',
    payload: expenses.filter(expense => expense.expenseTitle.toLowerCase().includes(keyword.toLowerCase())),
  });
}