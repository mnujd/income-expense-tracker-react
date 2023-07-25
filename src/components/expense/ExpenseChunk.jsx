import { FaDeleteLeft } from 'react-icons/fa6';

export default function ExpenseChunk({ expense, func }) {
  const { deleteExpense } = func;
  return (
    <div className="items-center flex border-b m-1 text-xl justify-between w-68 bg-gray-200 px-4 py-2 rounded-md">
      <div className="">{expense.name}</div>
      <div className="m-2 w-1 h-8 bg-gray-400"></div>
      <div className="mx-2">{expense.amount}</div>
      <div className="m-2 w-1 h-8 bg-gray-400"></div>
      <button onClick={() => deleteExpense(expense)} title="Delete">
        <FaDeleteLeft style={{ color: '#C82424' }} />
      </button>
    </div>
  );
}
