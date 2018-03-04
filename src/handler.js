'use strict';

const { getNearPlaces } = require('./map-api.js');

module.exports.map = (event, context, callback) => {
  getNearPlaces()
    .then(result => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          result
        }),
      };

      callback(null, response);
    })
    .catch(error => {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error
        }),
      };

      callback(null, response);
    })
};
