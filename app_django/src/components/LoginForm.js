import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }

      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: email,
        password: password,
      });

      const data = response.data;
      console.log(response.data);

      if (data.token) {
        localStorage.setItem("token", data.token);

        navigate("/customer");

        const uname = data.username
        console.log("Username:", uname);
        console.log("Email:", data.email);

      } else {
        setError("Incorrect email and password combination.");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Invalid email or password.");
      } else {
        setError("An error occurred while logging in.");
      }
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="error">{error}</p>

          <button type="submit" className="btn">
            Login
          </button>
          <br />
          <br />

          <Link to="/registration" className="btn btn-primary border w-50">
            Create Account
          </Link>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
