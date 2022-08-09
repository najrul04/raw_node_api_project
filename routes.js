/*

Title: Routes
Description: Application Routes
Author: Najrul
Date: 8/8/2022

*/

// Dependencies

const { sampleHandler } = require('./handlers/routeHandler/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
