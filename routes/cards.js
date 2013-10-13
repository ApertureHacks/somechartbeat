var request = require('request');
var cheerio = require('cheerio');

//Get top 100 most popular ecards
exports.get_popular_cards = function(callback) {
  request('http://www.someecards.com/popular-cards/most-sent-today/1/100/',
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        $ = cheerio.load(body);
        $(".cardthumb").each(function(i, elem) {
          results[i] = elem.attribs.href;
        });
        callback(results);
      }
  });
};
