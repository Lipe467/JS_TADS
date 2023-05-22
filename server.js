const express = require("express");
const desksRoutes = require("./routes/desks")
const healthRoutes = require("./routes/health");

const server = express();
server.use(express.json());

server.use(healthRoutes.router)
server.use(desksRoutes.router);

module.exports = {server}
