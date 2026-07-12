import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function SecureAdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/admin/login", form);

      const { token, admin } = response.data;

      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminData", JSON.stringify(admin));

      alert("Admin Login Successful");

      navigate("/tb-control-panel/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Admin Login Failed"
      );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🔐 Secure Admin Portal</h1>

        <p>Authorized personnel only</p>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          onChange={change}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={change}
        />

        <button onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SecureAdminLogin;