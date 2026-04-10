import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useExpenses = () => {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [filter, setFilter] = useState("All");

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  const totalAmount = filteredExpenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  return {
    expenses,
    addExpense,
    deleteExpense,
    filter,
    setFilter,
    filteredExpenses,
    totalAmount
  };
};

export default useExpenses;