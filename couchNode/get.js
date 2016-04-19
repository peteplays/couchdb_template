var couch = require("node-couchdb");
var db = 'test';
var id = '123';

couch.get(db, id, function (err, resData) {
	if (err)
		return console.error(err);
 
	console.dir(resData);
});