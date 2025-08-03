import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"; // Admin
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashboard from "./pages/DoctorDashboard";
import DashboardPage from "./pages/DashboardPage"; // Admin Dashboard
import RegisterDevice from "./pages/RegisterDevice";
import DeviceDashboard from "./pages/DeviceDashboard";
import DoctorSignup from "./pages/DoctorSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />

        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/register-device" element={<RegisterDevice />} />
        <Route path="/device-dashboard" element={<DeviceDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
