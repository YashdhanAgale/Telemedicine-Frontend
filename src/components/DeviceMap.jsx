const DeviceMap = ({ devices }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Pharmacy Device Map</h2>
      {devices.length === 0 ? (
        <p className="text-gray-500">No devices registered.</p>
      ) : (
        <ul className="space-y-2">
          {devices.map((device) => (
            <li key={device._id} className="border p-2 rounded">
              <p>
                <strong>Device ID:</strong> {device.deviceId}
              </p>
              <p>
                <strong>Location:</strong> {device.gpsLocation.lat},{" "}
                {device.gpsLocation.lng}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeviceMap;
