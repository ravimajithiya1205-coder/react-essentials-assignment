import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <Form>
    <div className={`task ${task.completed ? "completed" : ""}`}>

        <div className="d-flex gap-2 align-items-center">

         <Form.Check
    checked={task.completed}
    onChange={() =>
      dispatch({ type: "TOGGLE_TASK", payload: task.id })
    }
  />

      {edit ? (
        <Form.Control className="px-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />

      ) : (
        <p className="px-2 m-0" onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
          {task.text}
        </p>
      )}
      </div>

      <div className="buttons">
        {edit ? (
          <Button variant="success" onClick={() => {
            dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: newText } });
            setEdit(false);
          }}>Save</Button>
        ) : (
          <Button variant="success" onClick={() => setEdit(true)}>Edit</Button>
        )}

        <Button variant="danger" onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
          Delete
        </Button>
      </div>
    </div>
    </Form>
  );
};

export default TaskItem;