/*

Title: Sample Handler
Description: Sample Handle
Author: Najrul
Date: 8/8/2022

*/

//  Module Scuffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
