import React from "react";
import { Card } from "react-bootstrap";

const Summary = ({ total }) => {
  return (
    <Card className="mb-3 text-center">
      <Card.Body>
        <h5>Total Spending: ₹{total}</h5>
      </Card.Body>
    </Card>
  );
};

export default Summary;