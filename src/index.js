import http from "http";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import { PORT } from "./config.js";


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        //put '*' if we want a client to connect or put the specific url.
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    console.log(socket.id);
    console.log('a user connected');
});

app.use(morgan("dev"));
app.use(cors());

server.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    }
);