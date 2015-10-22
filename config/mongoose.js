var Connection  = require('../app/utils/connection.util'),
    assert = require('assert');

// Test connection
module.exports = function(){
    Connection.ejecute(function(err, db) { 
        assert.equal(null, err);
        console.log("OK - - > Connected correctly to server.");
        db.close();
    });
};