import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import socket from "../socket/Socket";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleLoading, setToggleLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctor();
    fetchSessions();
  }, []);

  const fetchDoctor = async () => {
    try {
      const res = await axios.get("/doctor/me");
      setDoctor(res.data);
    } catch (err) {
      console.error("Failed to load doctor data");
    }
  };

  const fetchSessions = async () => {
    try {
      const res = await axios.get("/session/my-sessions");
      setSessions(res.data.sessions);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load sessions");
      setLoading(false);
    }
  };

  const toggleAvailability = async () => {
    setToggleLoading(true);
    try {
      const res = await axios.put("/doctor/availability");
      setDoctor((prev) => ({
        ...prev,
        isAvailable: res.data.isAvailable,
      }));
    } catch (err) {
      console.error("Toggle failed");
    }
    setToggleLoading(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/doctor/logout");
      navigate("/");
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {doctor && (
          <div className="mb-6">
            <p>
              <strong>Name:</strong> {doctor.doctorName}
            </p>
            <p>
              <strong>Email:</strong> {doctor.doctorEmail}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  doctor.isAvailable
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {doctor.isAvailable ? "Available" : "Unavailable"}
              </span>
            </p>
            <button
              onClick={toggleAvailability}
              disabled={toggleLoading}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {toggleLoading ? "Toggling..." : "Toggle Availability"}
            </button>
          </div>
        )}

        <hr className="my-6" />

        <h2 className="text-xl font-semibold mb-4">My Sessions</h2>
        {loading ? (
          <p>Loading sessions...</p>
        ) : sessions.length === 0 ? (
          <p>No sessions found.</p>
        ) : (
          <ul className="space-y-3">
            {sessions.map((session) => (
              <li
                key={session._id}
                className="bg-gray-100 border px-4 py-3 rounded"
              >
                <p>
                  <strong>Device ID:</strong> {session.pharmacyDevice.deviceId}
                </p>
                <p>
                  <strong>Location:</strong> Lat:{" "}
                  {session.pharmacyDevice.gpsLocation.lat}, Lng:{" "}
                  {session.pharmacyDevice.gpsLocation.lng}
                </p>

                <p>
                  <strong>Status:</strong> {session.status}
                </p>
                <p>
                  <strong>Started:</strong>{" "}
                  {new Date(session.startedAt).toLocaleString()}
                </p>
                {session.endedAt && (
                  <p>
                    <strong>Ended:</strong>{" "}
                    {new Date(session.endedAt).toLocaleString()}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
