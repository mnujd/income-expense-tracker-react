import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Incomes from './components/income/Incomes';
import Expenses from './components/expense/Expenses';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  // Add New Income
  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      //Create new income
      const newIncome = {
        id: uuidv4(),
        name,
        amount: amount * 1,
      };
      // Marge new income with existing incomes
      setIncomes([...incomes, newIncome]);

      //Reset input filed
      setName('');
      setAmount(0);
    }
  };

  // Add New Expense
  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      //Create new expense
      const newExpense = {
        id: uuidv4(),
        name,
        amount,
      };
      // Marge new expense with existing expenses
      setExpenses([...expenses, newExpense]);

      //Reset input filed
      setName('');
      setAmount(0);
    }
  };

  const handleName = (name) => {
    setName(name);
  };

  const handleAmount = (amount) => {
    setAmount(amount);
  };

  // Delete Individual Income
  const deleteIncome = (delIncm) => {
    const newIncomes = incomes.filter((income) => income.id !== delIncm.id);
    setIncomes([...newIncomes]);
  };

  // Delete Individual Expense
  const deleteExpense = (delExpns) => {
    const newExpense = expenses.filter((expense) => expense.id !== delExpns.id);
    setExpenses([...newExpense]);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {/* Common Header for pages */}
      <div className="">
        <Header />
      </div>
      <div>
        {/* Routes */}
        <Routes>
          <Route
            path="/income"
            element={
              <Incomes
                data={{ incomes, name, amount }}
                func={{
                  handleIncomeSubmit,
                  handleName,
                  handleAmount,
                  deleteIncome,
                }}
              />
            }
          />
          <Route
            path="/expense"
            element={
              <Expenses
                data={{ expenses, name, amount }}
                func={{
                  handleExpenseSubmit,
                  handleName,
                  handleAmount,
                  deleteExpense,
                }}
              />
            }
          />
        </Routes>
      </div>
      {/* Home page intro */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
