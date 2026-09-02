import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import {connectToSocket} from "./controllers/socketManager.js";
import cors from "cors";
import dns from 'dns';
import userRoutes from "./routes/userRoutes.js";
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();
const server = createServer(app);

const io = connectToSocket(server);

app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);

const PORT = process.env.PORT || 8383;

app.get("/home", (req, res) => {
    return res.json({ hello: "world" });
});

const start = async () => {
    try {
        const connectionDb = await mongoose.connect(
            "mongodb+srv://moharec71_db_user:chaitanya123@cluster0.212oqhn.mongodb.net/?appName=Cluster0"
        );

        console.log(
            `Mongo connected: ${connectionDb.connection.host}`
        );

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
        process.exit(1);
    }
};

start();