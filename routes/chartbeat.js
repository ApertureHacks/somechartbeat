var request = require('request');

exports.fetch = function(req, res) {
  var card_url = req.params.url;

  var request_url = chartbeat_endpoint +
    "?apikey=" + chartbeat_key + "&host=someecards.com&path=" + card_url;

  request(request_url, function(err, resp, body) {
    if (!error && response.statusCode == 200) {
      res.write(body.toString());
      res.end();
    }
  });
};
