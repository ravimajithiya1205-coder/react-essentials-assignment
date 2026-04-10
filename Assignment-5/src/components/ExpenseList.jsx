import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ListGroup>
      {expenses.map((exp) => (
        <ListGroup.Item
          key={exp.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{exp.title}</strong>
            <br />
            <small>
              ₹{exp.amount} • {exp.category}
            </small>
          </div>

          {/* ✅ FIX HERE */}
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(exp.id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ExpenseList;