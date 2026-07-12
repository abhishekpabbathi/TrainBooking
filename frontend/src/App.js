import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchTrain from "./pages/SearchTrain";
import TrainResults from "./pages/TrainResults";
import Passenger from "./pages/Passenger";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import MyBookings from "./pages/MyBookings";
import SecureAdminLogin from "./pages/SecureAdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTrains from "./pages/AdminTrains";
import AdminLogin from "./pages/AdminLogin";

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/register" ||
    location.pathname ===
      "/tb-control-panel/login";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchTrain />
            </ProtectedRoute>
          }
        />

        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <TrainResults />
            </ProtectedRoute>
          }
        />

        <Route
          path="/passenger"
          element={
            <ProtectedRoute>
              <Passenger />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/confirmation"
          element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tb-control-panel/login"
          element={<SecureAdminLogin />}
        />

        <Route
          path="/tb-control-panel/dashboard"
          element={
            localStorage.getItem("admin") ? (
              <AdminDashboard />
            ) : (
              <AdminLogin />
            )
          }
        />

        <Route
          path="/tb-control-panel/trains"
          element={
            <AdminProtectedRoute>
              <AdminTrains />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;