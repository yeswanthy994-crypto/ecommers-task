// src/pages/Login.jsx
import React, { useState } from "react";
import "./Login.css";

const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "123456";

export default function Login({ onLogin }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError("");
      onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    // OUTER WRAPPER ONLY FOR CENTERING – background unchanged
    <div className="login-page">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/videos/iphone-bg.mp4"
      />
      <div className="overlay" />

      {/* ORIGINAL LOGIN BOX RESTORED */}
      <div className="login-box">
        <h2 className="login-title">iPhone Store</h2>
        <p className="subtitle">Sign in to explore the latest iPhones</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            className="input"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
            className="input"
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <div className="hint">
          <p>Demo credentials:</p>
          <p>
            Email: <strong>admin@example.com</strong>
          </p>
          <p>
            Password: <strong>123456</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
