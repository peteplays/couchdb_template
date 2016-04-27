var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

alice.list(function(err, body) {
    if( !err ) {
    	//console.log(body);
        body.rows.forEach(function(doc) {
            console.log(doc);
            //console.log(doc.id);
        });
        return;
    }
    if( err ) {
        console.log(err);
        return;
    }
});