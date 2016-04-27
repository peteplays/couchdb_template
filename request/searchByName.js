var request     = require('request'),
    u           = 'foo',
    p           = 'bar',
    couchdb_url = 'http://'+u+':'+p+'@localhost:5984',
    nano        = require('nano')(couchdb_url),
    db_name     = 'alice',
    db          = nano.use(db_name);

var input_db = 'alice';
var add_new_doc = {"name":"Pete"};
var options = {
	json: { type: add_new_doc }
};
var single_record = 'b8a439d782363f98c6872f9139004251';
var list_all_records = '_all_docs';

var design = '/_design/search/_view/';

var design_q = 'seeThings';
var search_q = '?name=Pete';

// db.view('search', 'searchbyname', function(err, body) {
//     if(err) {console.log(err); return;}
//     if(!err) {
//         //res.json(body.rows.length);
//         console.log(body);
//     }
// });

// var design_q = 'seeDocs';
// var search_q = '?startkey="Working"&endkey="Working"';

// request.get('http://foo:bar@127.0.0.1:5984/'+input_db, options, function (error, response, body) {
//   if(error) {
//   	console.log(error);
//   	return;
//   }
//   if(response) {
//   	console.log(response.body);
//   }
// });
var encode_url = encodeURI("http://foo:bar@127.0.0.1:5984/alice/_design/search/_view?");
request.get(encode_url, options, function (error, response, body) {
  if(error) {
  	console.log(error);
  	return;
  }
  if(response) {
  	console.log(response.body);
  }
});