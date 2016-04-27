var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

var id = 'e9e59c726a02c979d56e90b524000c2b';

var name = {"name":"chip"};

alice.get(name, function(err, body) {
    if( !err ) {
        console.log(body);
        return;
    }
    if( err ) {
        console.log(err);
    }
});