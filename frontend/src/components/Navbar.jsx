import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => navigate("/home")}
        >
          🚆
          <span>TrainBooking</span>
        </div>

        <nav className="navbar-links">
          <NavLink to="/home">
            Home
          </NavLink>

          <NavLink to="/search">
            Search Trains
          </NavLink>

          <NavLink to="/bookings">
            My Tickets
          </NavLink>

          <NavLink to="/profile">
            Profile
          </NavLink>
        </nav>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
