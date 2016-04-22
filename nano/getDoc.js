var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

var id = 'f7ad8f356665cb063bc5e032970017cd';

alice.get(id, function(err, body) {
    if( !err ) {
        console.log(body);
        return;
    }
    if( err ) {
        console.log(err);
    }
});