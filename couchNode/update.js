var couch = require("node-couchdb");
var db = 'test';
var id = 'a07f747099e74f0fbada97a2d9000649';
var rev = '1-75dc400857ebd222e72b3bd5c7cb7895';

couch.update(db, {
	_id: id,
	_rev: rev,
	field: "new sample data",
	field2: 1
}, function (err, resData) {
	if (err)
		return console.error(err);
 
	console.dir(resData);
});