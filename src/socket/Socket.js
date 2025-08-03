import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  transports: ["websocket"], // optional for cleaner WS only
});

export default socket;
