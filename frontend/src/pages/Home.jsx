import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-card">
        <div className="hero-icon">
          🚆
        </div>

        <h1>Welcome to TrainBooking</h1>

        <p>
          Book train tickets quickly, securely and
          manage all your journeys from one place.
        </p>

        <button
          onClick={() => navigate("/search")}
        >
          🔍 Search Trains
        </button>
      </div>

      <div className="home-cards">
        <div className="home-feature">
          <div className="feature-icon">
            🔍
          </div>

          <h2>Search Trains</h2>

          <p>
            Find available trains and check seat
            availability.
          </p>

          <button
            onClick={() => navigate("/search")}
          >
            Search Now
          </button>
        </div>

        <div className="home-feature">
          <div className="feature-icon">
            🎫
          </div>

          <h2>My Tickets</h2>

          <p>
            View all confirmed, cancelled and
            upcoming bookings.
          </p>

          <button
            onClick={() => navigate("/bookings")}
          >
            View Tickets
          </button>
        </div>

        <div className="home-feature">
          <div className="feature-icon">
            👤
          </div>

          <h2>My Profile</h2>

          <p>
            Update your personal information and
            saved passengers.
          </p>

          <button
            onClick={() => navigate("/profile")}
          >
            Open Profile
          </button>
        </div>
      </div>

      <div className="stats-card">
        <h2>📊 Quick Stats</h2>

        <div className="stats-grid">
          <div>
            ✔
            <br />
            Secure Payments
          </div>

          <div>
            ✔
            <br />
            Easy Cancellation
          </div>

          <div>
            ✔
            <br />
            Saved Passengers
          </div>

          <div>
            ✔
            <br />
            Booking History
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;