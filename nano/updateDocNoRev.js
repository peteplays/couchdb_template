var nano = require('nano')('http://foo:bar@localhost:5984');
var _ = require('underscore');

var alice = nano.use('alice');

var id = 'e9e59c726a02c979d56e90b524000c2b';

var update_fields = {name:'Pete', crazy:false, home:false, color:'blue'};

alice.get(id, function(err, body) {
    if( !err ) {
        var updated_values = _.extendOwn(body, update_fields);
        alice.insert(updated_values, function(err, body) {
            if( !err ) {
                console.log(body);
                return;
            }
            if( err ) {
                console.log(err);
            }
        });
    }
    if( err ) {
        console.log(err);
    }
});
