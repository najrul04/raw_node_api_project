/*

Title: Not Found Handler
Description: 404 Not FOund Handler Handle
Author: Najrul
Date: 9/8/2022

*/

//  Module Scuffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log('Not Found');
    callback(404, {
        message: 'Your Requested URL not found',
    });
};

module.exports = handler;
