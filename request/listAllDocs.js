var request = require('request');

var db = 'test'

request.get('http://127.0.0.1:5984/'+db+'/_all_docs',  function (error, response, body) {
  if(error) {
  	console.log(error);
  }
  if(response) {
  	//console.log(response.body);
  	//console.log(JSON.parse(body));  
  	var jsonData = JSON.parse(body);
  	jsonData.rows.forEach(function(v) {
  		console.log(v)
  	});
  }
});