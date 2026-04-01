import React, { Component } from "react";
import { Table } from "react-bootstrap";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  render() {
    return (
      <Table striped bordered hover responsive className="mt-4 text-center bg-white rounded">

        <thead className="table-dark">
          <tr>
            <th>👤 Name</th>
            <th>📊 Grade</th>
            <th>✅ Status</th>
            <th>⚙️ Action</th>
          </tr>
        </thead>

        <tbody>
          {this.props.students.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
              onDelete={this.props.onDelete}
            />
          ))}
        </tbody>

      </Table>
    );
  }
}

export default StudentList;