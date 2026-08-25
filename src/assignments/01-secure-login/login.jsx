import { useState } from "react";
import "./App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const isFormInvalid =
    !email.trim().includes("@") || password.trim().length < 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid) return;

    alert("Login successful!");
    setIsLoggedIn(true);
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isFormInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
