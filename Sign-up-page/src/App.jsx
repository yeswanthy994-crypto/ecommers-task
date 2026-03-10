import React, { useState } from "react";
import "./APP.css";
const initialUsers = [];

const products = [
  { id: 1, name: "Smartphone", category: "Mobile", price: "₹25,000" },
  { id: 2, name: "Smart Watch", category: "Watch", price: "₹5,000" },
  { id: 3, name: "Laptop", category: "Laptop", price: "₹55,000" },
  { id: 4, name: "Wireless Earbuds", category: "Accessory", price: "₹2,000" }
];

function App() {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }
    const exists = users.find(u => u.email === form.email);
    if (exists) {
      alert("User already exists. Please login.");
      setMode("login");
      return;
    }
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const handleLogin = e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }
    const user = users.find(
      u => u.email === form.email && u.password === form.password
    );
    if (!user) {
      alert("Invalid credentials or user not registered");
      return;
    }
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
    setForm({ name: "", email: "", password: "" });
    setMode("login");
  };

  // If logged in, show product/accessories page
  if (currentUser) {
    return (
      <div className="app-container">
        <header className="header">
          <h1>Accessory Store</h1>
          <div className="user-info">
            <span>Welcome, {currentUser.name}</span>
            <button className="btn secondary" onClick={logout}>
              Logout
            </button>
          </div>
        </header>

        <main className="products">
          {products.map(item => (
            <div key={item.id} className="product-card">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p className="price">{item.price}</p>
              <button className="btn primary">View Details</button>
            </div>
          ))}
        </main>
      </div>
    );
  }

  // If not logged in, show login/signup form
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>

        <form onSubmit={mode === "login" ? handleLogin : handleSignup}>
          {mode === "signup" && (
            <div className="form-control">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn primary">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
          <button
            className="link-btn"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setForm({ name: "", email: "", password: "" });
            }}
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
