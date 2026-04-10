import React from "react";
import { Form, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";

const ExpenseForm = ({ addExpense }) => {
  const { values, handleChange, resetForm } = useForm({
    title: "",
    amount: "",
    category: "Food",
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.title || !values.amount || !values.date) {
      alert("Please fill all fields");
      return;
    }

    addExpense(values);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Control
        name="title"
        placeholder="Title"
        value={values.title}
        onChange={handleChange}
        className="mb-2"
      />

      <Form.Control
        name="amount"
        type="number"
        placeholder="Amount"
        value={values.amount}
        onChange={handleChange}
        className="mb-2"
      />

      <Form.Select
        name="category"
        value={values.category}
        onChange={handleChange}
        className="mb-2"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </Form.Select>

      <Form.Control
        name="date"
        type="date"
        value={values.date}
        onChange={handleChange}
        className="mb-2"
      />

      <Button type="submit" variant="primary">
  ➕ Add Expense
</Button>
    </Form>
  );
};

export default ExpenseForm;