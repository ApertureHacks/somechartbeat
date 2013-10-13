
/*
 * GET home page.
 */

require('./cards');

exports.index = function(req, res){
  require('./cards').get_popular_cards();
  res.render('index', { title: 'Express' });
};
