var nano = require('nano')('http://foo:bar@localhost:5984');

nano.db.destroy('alice', function() {});