var nano = require('nano')('http://foo:bar@localhost:5984');

var db = nano.use('alice');

db.list(function(err, body) {
    if( !err ) {
        body.rows.forEach(function(doc) {
            db.get(doc.id, function(err, body) {
                if( !err ) {
                    console.log(body);
                    return;
                }
                if( err ) {
                    console.log(err);
                    return;
                }
            });
        });
    }
    if( err ) {
        console.log(err);
        return;
    }
});