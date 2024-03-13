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
      console.log(data);

      if (data.token) {
        localStorage.setItem("token",data.token );
        localStorage.setItem("uname",data.username);
        localStorage.setItem("phone_no",data.mobileno);
        localStorage.setItem("email",data.email);
        navigate("/customer");

        console.log("Username:", data.username);
        console.log("mobileno:", data.mobileno);
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
    <div className="login">
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
