import { Expense } from "../model/Expense";

interface Props {
  expenses:Expense[]
}

const ExpenseList = ({expenses}:Props) => {
  
  return (
    <div>
      <h2>Expense List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expenseId}>
              <td>{expense.name}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
