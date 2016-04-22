var nano = require('nano')('http://foo:bar@localhost:5984');
var _ = require('underscore');

var alice = nano.use('alice');

var id = 'f7ad8f356665cb063bc5e032970037f5';

var update_fields = {name:'Mary', crazy:false, home:true};

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
