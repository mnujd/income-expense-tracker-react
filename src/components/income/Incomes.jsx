import { FaPlusCircle } from 'react-icons/fa';
import Income from './Income';
// import incomeExpenseContext from '../contexts/incomeExpenseContext';

export default function Incomes({ data, func }) {
  const { incomes, name, amount } = data;
  const { handleIncomeSubmit, handleName, handleAmount, deleteIncome } = func;

  return (
    <div>
      <div className="rounded-sm mx-auto my-46">
        {/* Income Form */}
        <form
          onSubmit={handleIncomeSubmit}
          className="flex my-6 h-6 items-center text-xl justify-center"
        >
          <input
            type="text"
            placeholder="Add Income"
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
            <FaPlusCircle style={{ color: '#1da52d' }} />{' '}
          </button>
        </form>
      </div>

      <div>
        <Income incomes={incomes} func={{ deleteIncome }} />
      </div>
    </div>
  );
}
