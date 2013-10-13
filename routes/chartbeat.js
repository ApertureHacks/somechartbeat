var request = require('request');

exports.fetch = function(req, res) {
  var card_url = req.body.card_url;

  var request_url = chartbeat_endpoint + "?apikey=" + chartbeat_key + "&host=someecards.com&path=" + card_url;

  console.log("requesting with: " + request_url);
  request(request_url, function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
      res.write(body.toString());
      res.end();
    }
  });
};
