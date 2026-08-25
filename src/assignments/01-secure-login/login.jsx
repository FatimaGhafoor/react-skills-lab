import { useState } from "react";

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
      {isLoggedIn ? (
        <div className="welcome-class">
          <h2>Access Granted. 🔐</h2>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setEmail("");
              setPassword("");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Login;
