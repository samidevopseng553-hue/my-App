import React, { useState } from "react";
import "../../src/component/css/Register.css";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("✅ Registration successful! You can now log in.");
        console.log("Response:", data);
        setFormData({ name: "", email: "", password: "" });
      } else {
        const error = await response.json();
        setMessage(`❌ Registration failed: ${error.message || "Try again."}`);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Network error. Please check your backend connection.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create Your Account</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="login-text">
          Already have an account? <a href="/LoginPage">Login here</a>
        </p>
      </div>
    </div>
  );
}
