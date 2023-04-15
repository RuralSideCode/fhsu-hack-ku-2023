import { Server } from "socket.io";

const SocketHandler = (req, res) => {
    if(res.socket.server.io) {
        console.log("Server already running");
    } else {
        console.log("Initializing server");
        const io = new Server(res.socket.server);

        const p = players.find((p) => p.getUUID() == req.query.uuid);

        io.emit("hi", "hi");
        res.socket.server.io = io;
    }

    res.end();
}

export default SocketHandler;