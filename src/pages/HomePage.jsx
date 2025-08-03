import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Welcome to Telemedicine Panel
        </h1>
        <p className="mb-8 text-gray-600">
          Please choose your portal to continue:
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/admin-login")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-lg font-medium transition"
          >
            Admin Login
          </button>
          <button
            onClick={() => navigate("/doctor-login")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-lg font-medium transition"
          >
            Doctor Login
          </button>
          <button
            onClick={() => navigate("/register-device")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded text-lg font-medium transition"
          >
            Register Pharmacy Device
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
