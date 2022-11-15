import http from "http";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import { PORT } from "./config.js";


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    }
);