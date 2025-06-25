import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4001",
    method: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

const users = {};
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    console.log("Hallo", users);
  }
io.emit("getOnlineUser", Object.keys(users));

  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    delete users[userId];
    io.emit("getOnlineUser", Object.keys(users));
  });
});

export { app, io, server };
