import { io } from "socket.io-client";

const chatId = "3d7d0797-b7be-4e11-a028-18aa98f24c85";


const socket = io("https://pangee-siecwauy.xyz", {
  transports: ["websocket"], 
  reconnection: true,      
  reconnectionAttempts: 5,  
  reconnectionDelay: 1000,  
});


socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from WebSocket server");
});

export default socket;
