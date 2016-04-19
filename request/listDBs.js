var request = require('request');

request('http://127.0.0.1:5984/_all_dbs', function (error, response, body) {
  if(error) {
  	console.log(error);
  }
  if(response) {
  	console.log(response.body);
  }
});