import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import StudentList from "./components/StudentList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      name: "",
      grade: ""
    };
  }

  componentDidMount() {
    this.setState({
      students: [
        { id: 1, name: "Ravi", grade: 85 },
        { id: 2, name: "Amit", grade: 45 },
        { id: 3, name: "Rohit", grade: 55 }
      ]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, grade, students } = this.state;

    if (!name || grade < 0 || grade > 100) {
      alert("Enter valid data");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      grade: Number(grade)
    };

    this.setState({
      students: [...students, newStudent],
      name: "",
      grade: ""
    });
  };

  handleDelete = (id) => {
    this.setState({
      students: this.state.students.filter(s => s.id !== id)
    });
  };

  render() {
    return (
      <Container className="app-container">

        <div className="glass-card">

          <h2 className="title">🎓 Student Grade Tracker</h2>

          <Form onSubmit={this.handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="👤 Enter Student Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="📊 Enter Grade (0-100)"
                value={this.state.grade}
                onChange={(e) => this.setState({ grade: e.target.value })}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" className="px-4 fw-bold">
               Add Student
              </Button>
            </div>

          </Form>

          <StudentList
            students={this.state.students}
            onDelete={this.handleDelete}
          />

        </div>

      </Container>
    );
  }
}

export default App;