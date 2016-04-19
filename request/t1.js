var request = require('request');

var input_db = 'test';
var add_new_doc = {'Test':1, 'Docs':'Working'};
var options = {
	json: { type: add_new_doc }
};
var single_record = 'b8a439d782363f98c6872f9139004251';
var list_all_records = '_all_docs';

var design = '/_design/pete/_view/';

var design_q = 'seeThings';
var search_q = '?startkey=1&endkey=3';

// var design_q = 'seeDocs';
// var search_q = '?startkey="Working"&endkey="Working"';

request.get('http://foo:bar@127.0.0.1:5984/'+input_db+design+design_q+'/'+search_q, function (error, response, body) {
  if(error) {
  	console.log(error);
  }
  if(response) {
  	console.log(response.body);
  }
});