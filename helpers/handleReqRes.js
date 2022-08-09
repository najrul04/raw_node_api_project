/*

Title: Handle Request Response
Description: Handle Request and Response
Author: Najrul
Date: 8/8/2022

*/

// Dependencies
const url = require('url');

const { StringDecoder } = require('string_decoder');

const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandler/notFoundHandler');

// Module Scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
    // Request Handle
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // Response handle
        res.end('Hello World yoo nodemon bleh bleh bleh');
    });
};
module.exports = handler;
