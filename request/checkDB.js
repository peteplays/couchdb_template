var request = require('request');

var db = 'test';

request.get('http://127.0.0.1:5984/'+db,  function (error, response, body) {
  if(error) {
  	console.log(error);
    return;
  }
  if(response) {
  	console.log(response.body);
  	var jsonData = JSON.parse(body);
    if(jsonData.db_name == db) console.log('yes');
    console.log(jsonData.doc_count)
  }
});