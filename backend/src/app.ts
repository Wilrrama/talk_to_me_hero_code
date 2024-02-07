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
    this.io = new Server(this.http);
  }
  public listen() {
    this.app.listen(3333, () => {
      console.log("Server is Running on port 3333");
    });
  }

  public listenSocket() {
    this.io.of("/streams").on("connection", this.socketEvents);
  }

  private socketEvents(socket: Socket) {
    console.log("Socket connect" + socket.id);
    socket.on("subscribe", (data) => {
      socket.join(data.roomId);

      socket.broadcast.to(data.roomId).emit("chat", {
        message: data.message,
        username: data.username,
        time: data.time,
      });
    });
  }
}

export { App };
