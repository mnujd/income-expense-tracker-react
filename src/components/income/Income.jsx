import IncomeChunk from './IncomeChunk';

export default function Income({ incomes, func }) {
  return (
    <div className="flex flex-col items-center ">
      {incomes.length > 0 && (
        <div className="border p-4 bg-gray-100">
          {incomes?.map((income) => (
            <IncomeChunk income={income} key={income.id} func={func} />
          ))}
        </div>
      )}
      <div className="text-center py-2 px-4 mt-4 text-xl font-bold text-teal-700 border rounded-md">
        Total Income:{' '}
        {incomes?.reduce((prev, curr) => prev * 1 + curr.amount * 1, 0)}
      </div>
    </div>
  );
}
