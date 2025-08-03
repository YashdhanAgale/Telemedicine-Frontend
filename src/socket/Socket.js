import { io } from "socket.io-client";

const socket = io("https://telemedicine-backend-o4h3.onrender.com/", {
  withCredentials: true,
  transports: ["websocket"], // optional for cleaner WS only
});

export default socket;
