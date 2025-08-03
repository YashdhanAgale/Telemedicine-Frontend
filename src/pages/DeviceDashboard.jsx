import { useLocation } from "react-router-dom";

const DeviceDashboard = () => {
  const { state } = useLocation(); // contains session data from navigate()

  if (!state) return <p>No session data found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <a href="/" className="text-blue-600 underline absolute top-4 left-4">
        Home
      </a>
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Device Dashboard
        </h2>

        <p>
          <strong>Device ID:</strong> {state.deviceId}
        </p>
        <p>
          <strong>Session ID:</strong> {state.sessionId}
        </p>
        <p>
          <strong>Doctor Name:</strong> {state.doctor.name}
        </p>
        <p>
          <strong>Doctor Email:</strong> {state.doctor.email}
        </p>
        <p>
          <strong>Started At:</strong>{" "}
          {new Date(state.startedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default DeviceDashboard;
