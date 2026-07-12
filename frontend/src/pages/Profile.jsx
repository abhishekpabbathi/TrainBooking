import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await API.get(
          "/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    window.location = "/";
  };

  if (!user) {
    return (
      <div className="dashboard">
        <div className="profile-card">
          <h2>
            Loading Profile...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="profile-card">
        <div className="profile-avatar">
          👤
        </div>

        <h1>My Profile</h1>

        <p className="profile-subtitle">
          Manage your TrainBooking account
        </p>

        <div className="profile-details">
          <div className="detail-box">
            <span>Name</span>

            <h3>{user.name}</h3>
          </div>

          <div className="detail-box">
            <span>Email</span>

            <h3>{user.email}</h3>
          </div>

          <div className="detail-box">
            <span>Phone</span>

            <h3>
              {user.phone || "Not Added"}
            </h3>
          </div>
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;