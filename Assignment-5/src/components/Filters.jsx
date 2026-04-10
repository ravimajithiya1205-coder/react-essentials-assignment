import React from "react";
import { Form } from "react-bootstrap";

const Filters = ({ filter, setFilter }) => {
  return (
    <Form.Select
      className="mb-3"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>
    </Form.Select>
  );
};

export default Filters;