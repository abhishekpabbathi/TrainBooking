import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/admin/login",
        data
      );

      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      alert("Admin Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid Admin Login");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Admin Login 🔐</h1>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={data.email}
          onChange={change}
        />

        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          value={data.password}
          onChange={change}
        />

        <button onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;