import ExpenseChunk from './ExpenseChunk';

export default function Expense({ expenses, func }) {
  return (
    <div className="flex flex-col items-center ">
      {expenses.length > 0 && (
        <div className="border p-4 bg-gray-100">
          {expenses?.map((expense) => (
            <ExpenseChunk expense={expense} key={expense.id} func={func} />
          ))}
        </div>
      )}

      <div className="text-center py-2 px-4 mt-4 text-xl font-bold text-teal-700 border rounded-md">
        Total Expense:{' '}
        {expenses?.reduce((prev, curr) => prev * 1 + curr.amount * 1, 0)}
      </div>
    </div>
  );
}
