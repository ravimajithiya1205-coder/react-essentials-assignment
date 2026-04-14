import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const PizzaOrder = () => {
  const [order, setOrder] = useState({
    size: "Small",
    crust: "Thin",
    toppings: [],
    sides: [],
    qty: 1
  });

  const prices = {
    Small: 200,
    Medium: 400,
    Large: 600,
    topping: 50,
    side: 30
  };

  const handleCheckbox = (type, value) => {
    setOrder((prev) => {
      const list = prev[type];
      return {
        ...prev,
        [type]: list.includes(value)
          ? list.filter(i => i !== value)
          : [...list, value]
      };
    });
  };

  const total =
    prices[order.size] +
    order.toppings.length * prices.topping +
    order.sides.length * prices.side;

  return (
    <div className="glass text-start">
      <h3 className="text-center">🍕 Pizza Order</h3>

      <Form>
        <Form.Select className="mb-2"
          onChange={(e) => setOrder({...order, size: e.target.value})}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </Form.Select>

        <Form.Select className="mb-2"
          onChange={(e) => setOrder({...order, crust: e.target.value})}>
          <option>Thin</option>
          <option>Cheese Burst</option>
        </Form.Select>

        <div className="mb-2">
          <strong>Toppings:</strong>
          {["Cheese","Mushroom","Paneer"].map(t => (
            <Form.Check key={t} label={t}
              onChange={() => handleCheckbox("toppings", t)} />
          ))}
        </div>

        <div className="mb-2">
          <strong>Sides:</strong>
          {["Coke","Dip"].map(s => (
            <Form.Check key={s} label={s}
              onChange={() => handleCheckbox("sides", s)} />
          ))}
        </div>

        <Form.Control
          type="number"
          value={order.qty}
          className="mb-2"
          onChange={(e) => setOrder({...order, qty: e.target.value})}
        />

      </Form>

      <Card className="mt-3 p-3">
        <h5>Order Summary</h5>
        <p>Size: {order.size}</p>
        <p>Crust: {order.crust}</p>
        <p>Toppings: {order.toppings.join(", ")}</p>
        <p>Sides: {order.sides.join(", ")}</p>
        <h4>Total: ₹{total * order.qty}</h4>
      </Card>
    </div>
  );
};

export default PizzaOrder;