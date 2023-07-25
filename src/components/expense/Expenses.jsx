import { FaPlusCircle } from 'react-icons/fa';
import Expense from './Expense';

export default function Expenses({ data, func }) {
  const { expenses, name, amount } = data;
  const { handleExpenseSubmit, handleName, handleAmount, deleteExpense } = func;
  return (
    <div>
      <div className="rounded-sm mx-auto my-46">
        {/* Expense Form */}
        <form
          onSubmit={handleExpenseSubmit}
          className="flex my-6 h-6 items-center text-xl justify-center"
        >
          <input
            type="text"
            placeholder="Add Expense"
            value={name}
            onChange={(e) => handleName(e.target.value)}
            className="focus:outline-none rounded-sm border p-2 mr-1"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => handleAmount(e.target.value)}
            className="focus:outline-none rounded-sm border text-center p-2 mr-1 w-40"
          />
          <button type="submit">
            {' '}
            <FaPlusCircle style={{ color: '#F30909' }} />{' '}
          </button>
        </form>
      </div>

      <div>
        <Expense expenses={expenses} func={{ deleteExpense }} />
      </div>
    </div>
  );
}
