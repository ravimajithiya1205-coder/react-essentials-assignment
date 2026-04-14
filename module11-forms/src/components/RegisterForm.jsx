import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const RegisterForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Please fill your name";
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Enter 10 digit phone number";
    if (!form.password || form.password.length < 6)
      err.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Passwords do not match";
    if (!form.gender) err.gender = "Please select gender";
    if (!form.terms) err.terms = "You must accept terms";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem("user", JSON.stringify(form));
    setSuccess("Registration Successful 🎉");

    // optional reset
    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      terms: false,
    });

    setErrors({});
    setTimeout(() => {
      if (onSuccess) {
        console.log("Calling onSuccess...");
        onSuccess();
      } else {
        console.log("onSuccess missing ❌");
      }
    }, 100);
  };

  return (
    <div className="glass text-start">
      <h3 className="text-center mb-3">👤 Register</h3>

      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Control
          placeholder="Name"
          className={`mb-2 ${
            errors.name ? "is-invalid" : form.name ? "is-valid" : ""
          }`}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        {/* Email */}
        <Form.Control
          placeholder="Email"
          className={`mb-2 ${
            errors.email ? "is-invalid" : form.email ? "is-valid" : ""
          }`}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        {/* Phone */}
        <Form.Control
          placeholder="Phone"
          className={`mb-2 ${
            errors.phone ? "is-invalid" : form.phone ? "is-valid" : ""
          }`}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}

        {/* Password */}
        <Form.Control
          type="password"
          placeholder="Password"
          className={`mb-2 ${
            errors.password ? "is-invalid" : form.password ? "is-valid" : ""
          }`}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        {/* Confirm Password */}
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          className={`mb-2 ${
            errors.confirmPassword
              ? "is-invalid"
              : form.confirmPassword
                ? "is-valid"
                : ""
          }`}
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />
        {errors.confirmPassword && (
          <small className="text-danger">{errors.confirmPassword}</small>
        )}

        {/* Gender */}
        <Form.Select
          className={`mb-2 ${
            errors.gender ? "is-invalid" : form.gender ? "is-valid" : ""
          }`}
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
        {errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}

        {/* Terms */}
        <Form.Check
          id="termsCheckbox"
          label="Accept Terms"
          className={`mb-2 ${errors.terms ? "is-invalid" : ""}`}
          checked={form.terms}
          onChange={(e) => setForm({ ...form, terms: e.target.checked })}
        />
        {errors.terms && <small className="text-danger">{errors.terms}</small>}

        <Button type="submit" className="w-100 mt-2">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
