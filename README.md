# 🩺 Telemedicine Platform – Full Stack App

This is a full-stack web application for managing doctor sessions with pharmacy devices in real time. It includes role-based access for Admin, Doctors, and Pharmacy Devices.

---

## 💻 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express + MongoDB (Mongoose)  
- **Auth**: JWT (stored in cookies)  
- **Realtime**: Socket.IO

---

## 📦 Features

### ✅ Admin Panel
- Admin login (restricted to `admin@example.com`)
- View online doctors
- View active sessions
- See device map
- Real-time doctor availability

### ✅ Doctor Panel
- Doctor register/login/logout
- Toggle availability
- View session history
- End sessions they own
- Real-time availability updates

### ✅ Pharmacy Device Panel
- Register device with GPS and Device ID
- Start a session (automatically assigns available doctor)
- View assigned doctor details

---

## 🔐 Auth & Routing

- **Auth Middleware** to protect routes
- **Admin Middleware** restricts admin routes to `admin@example.com`
- **Role-specific Dashboards** with clean navigation links

---

## 🚀 Getting Started


# Frontend
cd frontend
npm install
npm run dev
