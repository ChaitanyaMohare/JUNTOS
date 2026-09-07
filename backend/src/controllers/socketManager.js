import {Server} from "socket.io"

let connection = {}
let messages = {}
let timeOnline = {}

export const connectToSocket = (server) =>{
    const io = new Server(server);

    io.on("connection",(socket) =>{
        socket.on("join-call",(path) =>{

        })
        socket.on("signal")
    })
    return io;
} 