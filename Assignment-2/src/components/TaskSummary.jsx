import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const TaskSummary = () => {
  const { state, dispatch } = useContext(TaskContext);

  const total = state.tasks.length;
  const completed = state.tasks.filter(t => t.completed).length;

  return (
    <div className="summary">
      <p>Total: <Badge bg="primary">{total}</Badge></p>
      <p>Completed: <Badge bg="success">{completed}</Badge></p>

      <Button variant="danger" onClick={() => dispatch({ type: "CLEAR_TASKS" })}>
        Clear All
      </Button>
    </div>
  );
};

export default TaskSummary;