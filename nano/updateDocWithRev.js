var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

var id = 'rabbit';
var rev = '5-1c513883c60cc97ce5df7267ddaa3d31';

alice.insert({ _id: id, _rev: rev, crazy: false }, function(err, body) {
    if( !err ) {
        console.log(body);
        return;
    }
    if( err ) {
        console.log(err);
    }
});
