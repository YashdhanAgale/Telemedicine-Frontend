import { useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const RegisterDevice = () => {
  const [deviceId, setDeviceId] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      // Step 1: Register the device
      await axios.post("/pharmacy/register", {
        deviceId,
        gpsLocation: { lat: Number(lat), lng: Number(lng) },
      });

      // Step 2: Start session
      const res = await axios.post("/session/start", { deviceId });

      // Step 3: Go to dashboard and pass session data
      navigate("/device-dashboard", { state: res.data });
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <a href="/" className="text-blue-600 underline absolute top-4 left-4">
        Home
      </a>
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register Pharmacy Device
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Device ID"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register & Start Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterDevice;
