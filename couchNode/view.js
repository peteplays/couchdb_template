var couch = require('node-couchdb');

var db = 'test';
var startKey = ['Ann'];
var endKey = ['George'];
var viewUrl = '_design/list/_views/by_firstname';
var queryOptions = {
	startkey: startKey,
	endkey: endKey
};
 
couch.get(db, viewUrl, queryOptions, function (err, resData) {
	if (err)
		return console.error(err);
 
	console.dir(resData)
});