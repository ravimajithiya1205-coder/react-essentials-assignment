import React, { Component } from "react";
import { Button } from "react-bootstrap";

class StudentItem extends Component {
  render() {
    const { student, onDelete } = this.props;

    const isPassed = student.grade >= 50;

    return (
      <tr className={isPassed ? "table-success" : "table-danger"}>

        <td className="fw-bold">{student.name}</td>
        <td>{student.grade}</td>
        <td>
          {isPassed ? "✅ Passed" : "❌ Failed"}
        </td>

        <td>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(student.id)}
          >
            🗑 Delete
          </Button>
        </td>

      </tr>
    );
  }
}

export default StudentItem;