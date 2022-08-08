/*

Title: Handle Request Response
Description: Handle Request and Response
Author: Najrul
Date: 8/8/2022

*/

// Dependencies
const url = require('url');

const { StringDecoder } = require('string_decoder');

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
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

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
