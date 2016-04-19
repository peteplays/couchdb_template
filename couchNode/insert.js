var couch = require("node-couchdb");

var db = 'test'

couch.insert(db, {
	_id: '123',
	field: ["sample", "data", true]
}, function (err, resData) {
	if (err)
		return console.error(err);
 
	console.dir(resData)
});