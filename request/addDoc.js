var request = require('request');

var input_db = 'test';
var add_new_doc = {'things':3, 'Docs':'Working'};

var options = {
	//json: { type: add_new_doc }
	json: add_new_doc
};


request.post('http://foo:bar@127.0.0.1:5984/'+input_db, options, function (error, response, body) {
  if(error) {
  	console.log(error);
  	return;
  }
  if(response) {
  	console.log(response.body);
  }
});