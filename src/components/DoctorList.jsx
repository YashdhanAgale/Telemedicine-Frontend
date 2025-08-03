const DoctorList = ({ doctors }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Online Doctors</h2>
      {doctors.length === 0 ? (
        <p className="text-gray-500">No doctors online.</p>
      ) : (
        <ul className="space-y-2">
          {doctors.map((doc) => (
            <li
              key={doc.doctorId}
              className="border p-2 rounded flex justify-between items-center"
            >
              <span>
                {doc.name} ({doc.email})
              </span>
              <span
                className={`text-sm px-2 py-1 rounded ${
                  doc.isAvailable
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {doc.isAvailable ? "Available" : "Busy"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorList;
