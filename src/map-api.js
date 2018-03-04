const request = require("request"),
  url = "https://api.foursquare.com/v2/venues/explore",
  method = "GET",
  limit = 50,
  v = "20170801";

exports.getNearPlaces = ({ ll, query, radius }) => {
  return new Promise((resolve, reject) => {
    request({
      url,
      method,
      qs: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        ll,
        query,
        radius,
        limit,
        v
      }
    }, function (err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};
