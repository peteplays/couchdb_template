var request = require('request');

var add_new_db = 'test';

request.del('http://foo:bar@127.0.0.1:5984/'+add_new_db, function (error, response, body) {
  if(error) {
  	console.log(error);
  	return;
  }
  if(response) {
  	console.log(response.body);
  }
});