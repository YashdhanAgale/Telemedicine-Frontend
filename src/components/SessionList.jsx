const SessionList = ({ sessions }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Active Sessions</h2>
      {sessions.length === 0 ? (
        <p className="text-gray-500">No active sessions.</p>
      ) : (
        <ul className="space-y-2">
          {sessions.map((session) => (
            <li key={session._id} className="border p-2 rounded">
              <p>
                <strong>Doctor:</strong> {session.doctor.name}
              </p>
              <p>
                <strong>Device ID:</strong> {session.pharmacyDevice.deviceId}
              </p>
              <p>
                <strong>Started At:</strong>{" "}
                {new Date(session.startedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SessionList;
