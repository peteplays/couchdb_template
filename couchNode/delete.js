var couch = require("node-couchdb");
var db = 'test';
var id = '123';
var rev = '1-75dc400857ebd222e72b3bd5c7cb7895';

couch.del(db, id, rev, function (err, resData) {
	if (err)
		return console.error(err);
 
	console.dir(resData);
});