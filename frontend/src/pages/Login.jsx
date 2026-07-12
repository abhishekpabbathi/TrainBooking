import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin((previousLogin) => ({
      ...previousLogin,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/auth/login",
        login
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      navigate("/home");
    } catch (error) {
      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="logo">
          🚆
        </div>

        <h1>TrainBooking</h1>

        <p className="subtitle">
          Login to continue your journey
        </p>

        <form onSubmit={loginUser}>
          <label>
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={login.email}
            onChange={handleChange}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={login.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login 🚆
          </button>
        </form>

        <div className="register-box">
          <p>
            Don't have an account?
          </p>

          <Link to="/register">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;