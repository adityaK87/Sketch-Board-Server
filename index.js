const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
app.use(cors({ origin: "http://localhost:3000" }));

const io = new Server(httpServer, {
	cors: "http://localhost:3000",
});

io.on("connection", (socket) => {
	console.log("server connected");
});

httpServer.listen(5000, () => {
	console.log("Server has been listening on port 5000");
});
