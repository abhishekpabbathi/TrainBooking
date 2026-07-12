import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setUser((previousUser) => ({
      ...previousUser,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", user);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
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
          Create your account and start booking
        </p>

        <form onSubmit={registerUser}>
          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={user.name}
            onChange={change}
          />

          <label>
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={change}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={user.password}
            onChange={change}
          />

          <label>
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={user.phone}
            onChange={change}
          />

          <button type="submit">
            Create Account 🚆
          </button>
        </form>

        <div className="register-box">
          <p>
            Already have an account?
          </p>

          <Link to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;