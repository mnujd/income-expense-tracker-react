import { FaDeleteLeft } from 'react-icons/fa6';
export default function IncomeChunk({ income, func }) {
  const { deleteIncome } = func;
  return (
    <div className="items-center flex border-b m-1 text-xl justify-between w-68 bg-gray-200 px-4 py-2 rounded-md">
      <div className="">{income.name}</div>
      <div className="m-2 w-1 h-8 bg-gray-400"></div>
      <div className="mx-2">{income.amount}</div>
      <div className="m-2 w-1 h-8 bg-gray-400"></div>
      <button onClick={() => deleteIncome(income)} title="Delete">
        <FaDeleteLeft style={{ color: '#C82424' }} />
      </button>
    </div>
  );
}
