const category = [
  {
    id: '1',
    name: 'Food and Restaurant',
  },
  {
    id: '2',
    name: 'Subscription',
  },
  {
    id: '3',
    name: 'Travel',
  },
  {
    id: '4',
    name: 'Others',
  }
];
let expenses = [
  {
    id: '1',
    expenseTitle: 'Monday Groceries',
    categoryId: '1',
    categoryName: 'Food and Restaurant',
    amount: 369,
    date: 'May 2nd 2020',
    notes: 'sample notes 1',
  },
  {
    id: '2',
    expenseTitle: 'Online Streaming',
    categoryId: '2',
    categoryName: 'Subscription',
    amount: 114,
    date: 'May 1st 2020',
    notes: 'sample notes 2',
  },
  {
    id: '3',
    expenseTitle: 'Tuesday Groceries',
    categoryId: '1',
    categoryName: 'Food and Restaurant',
    amount: 231,
    date: 'May 2nd 2020',
    notes: 'sample notes 3',
  },
];
//date format = MMMM Do YYYY
const list = () => {
  return new Promise(resolve => resolve(expenses));
}

const add = expense => {
  expenses = [...expenses, expense]
  return new Promise(resolve => resolve(expense));
}

export {
  list as getExpenseList,
  category as getCategory ,
  add as addExpense,
};