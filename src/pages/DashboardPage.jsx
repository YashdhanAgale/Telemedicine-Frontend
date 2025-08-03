// src/pages/DashboardPage.jsx

import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import socket from "../socket/Socket";
import DoctorList from "../components/DoctorList";
import SessionList from "../components/SessionList";
import DeviceMap from "../components/DeviceMap";

const DashboardPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [devices, setDevices] = useState([]);

  // Load initial data
  useEffect(() => {
    fetchData();
  }, []);

  // Listen to real-time doctor status changes
  useEffect(() => {
    socket.on("doctorStatusChanged", (updatedDoctor) => {
      setDoctors((prevDoctors) => {
        return prevDoctors.map((doc) =>
          doc.doctorId === updatedDoctor.doctorId
            ? { ...doc, isAvailable: updatedDoctor.isAvailable }
            : doc
        );
      });
    });

    return () => {
      socket.off("doctorStatusChanged");
    };
  }, []);

  const fetchData = async () => {
    try {
      const [doctorRes, sessionRes, deviceRes] = await Promise.all([
        axios.get("/admin/online-doctors"),
        axios.get("/admin/active-sessions"),
        axios.get("/admin/device-map"),
      ]);

      setDoctors(doctorRes.data.doctors);
      setSessions(sessionRes.data.sessions);
      setDevices(deviceRes.data.devices);
    } catch (err) {
      console.error("Error fetching dashboard data:", err.message);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DoctorList doctors={doctors} />
        <SessionList sessions={sessions} />
      </div>

      <div className="mt-8">
        <DeviceMap devices={devices} />
      </div>

      <button
        onClick={async () => {
          try {
            await axios.post("/doctor/logout"); // clear cookie from backend
            window.location.href = "/"; // redirect to login
          } catch (err) {
            console.error("Logout failed", err);
          }
        }}
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
