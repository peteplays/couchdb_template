var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

alice.list(function(err, body) {
    if( !err ) {
        body.rows.forEach(function(doc) {
            console.log(doc);
        });
        return;
    }
    if( err ) {
        console.log(err);
    }
});