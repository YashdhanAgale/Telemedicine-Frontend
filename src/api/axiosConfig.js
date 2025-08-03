import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://telemedicine-backend-o4h3.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
