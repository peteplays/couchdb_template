var couchdb = require('couchdb');
var client  = couchdb.createClient(5984, 'localhost');
var db      = client.db('test');

var doc = { _id: 'test', text: 'Hello CouchDB!' };

db.saveDoc(doc).then(function() {
	console.log('document saved!');

	db.openDoc('test').then(function(doc) {
		console.log('retrieved document!');
		console.log(JSON.stringify(doc));
	});
});