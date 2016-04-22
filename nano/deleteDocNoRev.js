var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

var id = 'rabbit';

alice.get(id, function(err, body) {
    if( !err ) {
        alice.destroy(id, body._rev, function(err, body) {
            if (!err) {
                console.log(body);
                return;
            }
            if(err) {
                console.log(err);
            }
        });
    }
    if( err ) {
        console.log(err);
    }
});

