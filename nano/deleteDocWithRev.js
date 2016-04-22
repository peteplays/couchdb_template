var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');

var id = 'rabbit';
var rev = '3-6de274024f100e0d3127c894c44db47a';

alice.destroy(id, rev, function(err, body) {
  if( !err ) {
    console.log(body);
    return;
  }
  if( err ) {
    console.log(err);
  }
});