const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const socketio = require("socket.io");

const port = 8000

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.json());

server.listen(port, () => {
    console.log('server is up');
});