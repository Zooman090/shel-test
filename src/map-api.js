const request = require("request");

exports.getNearPlace = (parameter) => {
  return new Promise((resolve, reject) => {
    const url = "https://api.foursquare.com/v2/venues/explore",
      method = "GET";

    request({
      url,
      method,
      qs: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        /* TODO: mus set dynamic parameters here */
        ll: '40.7243,-74.0018',
        query: 'coffee',
        v: '20170801'
      }
    }, function(err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};
