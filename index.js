/*

Title: Uptime Monitoring Application
Description: A RESTful API to monitor up or downtime of user defined links
Author: Najrul
Date: 8/8/2022

*/

// Dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// App object - module Scaffolding
const app = {};

// Configuration

app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes;
// start the server

app.createServer();
