import { useState } from "react";
import "./App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <h2>Login</h2>
    </div>
  );
};

export default Login;
