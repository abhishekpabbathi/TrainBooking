import AdminTrains from "./AdminTrains";

function AdminDashboard() {
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1>🚆 Admin Dashboard</h1>

        <p>
          Manage Train Routes and Availability
        </p>
      </div>

      <AdminTrains />
    </div>
  );
}

export default AdminDashboard;