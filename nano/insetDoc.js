var nano = require('nano')('http://foo:bar@localhost:5984');

var alice = nano.use('alice');
// var id = 'rabbit';

// alice.insert({ crazy: true }, id, function(err, body, header) {
//   if( err ) {
//     console.log('[alice.insert] ', err.message);
//     return;
//   }
//   console.log('you have inserted the '+id);
//   console.log(body);
// });

alice.insert({ crazy: false, fun: true, colors: ['red', 'blue', 'green'], name:'Mary', stuff:'guitars' }, function(err, body, header) {
  if( err ) {
    console.log('[alice.insert] ', err.message);
    return;
  }
  console.log('you have inserted a new doc with id: '+body.id);
  console.log(body);
});

