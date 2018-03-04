'use strict';

const { getNearPlaces } = require('./map-api.js'),
  headers = {
    "Access-Control-Allow-Origin": "https://zooman090.github.io" 
  };

module.exports.map = ({ queryStringParameters }, context, callback) => {
  getNearPlaces(queryStringParameters)
    .then(result => {
      const response = {
        statusCode: 200,
        headers,
        body: JSON.stringify(result),
      };

      callback(null, response);
    })
    .catch(error => {
      const response = {
        statusCode: 500,
        headers,
        body: JSON.stringify(error),
      };

      callback(null, response);
    })
};
