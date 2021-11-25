const express = require('express');
const cors = require('cors');
const server = express();

//Entity Routes Imports
const fincadoRoutes = require("./src/routes/fincado.routes");

//Error Handler Import
const errorHandler = require('./src/helpers/errorHandler');

//Config
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true, strict: false }));

console.log("in app");


// routes   
server.use('/fincado/fincado', fincadoRoutes);

//unknown routes error Handler
server.use(errorHandler.notFound);
server.use(errorHandler.internalServerError);

module.exports = server;