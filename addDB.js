var request = require('request');

var add_new_db = 'pete12345';

request.put('http://foo:bar@127.0.0.1:5984/'+add_new_db, function (error, response, body) {
  if(error) {
  	console.log(error);
  }
  if(response) {
  	console.log(response.body);
  }
});