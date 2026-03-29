import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskInput = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <div className="input-box">
      <Form.Control
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleAdd}>Add Task</Button>
    </div>
  );
};

export default TaskInput;