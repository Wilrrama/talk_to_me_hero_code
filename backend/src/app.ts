import express, { Application } from "express";
import { Server, Socket } from "socket.io";
import http from "http";

class App {
  private app: Application;
  private http: http.Server;
  private io: Server;
  constructor() {
    this.app = express();
    this.http = new http.Server(this.app);
    this.io = new Server(this.http, {
      cors: {
        origin: "*",
      },
    });
  }
  public listen() {
    this.http.listen(3333, () => {
      console.log("Server is Running on port 3333");
    });
  }

  public listenSocket() {
    this.io.of("/streams").on("connection", this.socketEvents);
  }

  private socketEvents(socket: Socket) {
    console.log("Socket connect" + socket.id);
    socket.on("subscribe", (data) => {
      console.log("usuario inserido na sala" + data.roomId);
      socket.join(data.roomId);
      socket.join(data.socketId);

      const roomsSession = Array.from(socket.rooms);

      if (roomsSession.length > 1) {
        socket
          .to(data.roomId)
          .emit("new user", { socketId: socket.id, username: data.username });
      }
    });
    socket.on("newUserStart", (data) => {
      console.log("Novo usuario chegou", data);
      socket.to(data.to).emit("newUserStart", {
        sender: data.sender,
      });
    });

    socket.on("sdp", (data) => {
      socket.to(data.to).emit("sdp", {
        description: data.description,
        sender: data.sender,
      });
    });

    socket.on("chat", (data: any) => {
      console.log(data);
      socket.broadcast.to(data.roomId).emit("chat", {
        message: data.message,
        username: data.username,
        time: data.time,
      });
    });
  }
}

export { App };
