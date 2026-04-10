import React from "react";
import { Container } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import useExpenses from "./hooks/useExpenses";

const App = () => {
  const {
    expenses,
    addExpense,
    deleteExpense,
    filter,
    setFilter,
    filteredExpenses,
    totalAmount
  } = useExpenses();

  return (
   <Container className="mt-5 d-flex justify-content-center">
  <div className="glass-card w-100" style={{ maxWidth: "500px" }}>

    <h2 className="title">💸 Expense Tracker</h2>

    <ExpenseForm addExpense={addExpense} />

    <Filters filter={filter} setFilter={setFilter} />

    <Summary total={totalAmount} />

    <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />

  </div>
</Container>
  );
};

export default App;