
const assert = require( "assert" );
const rder = require( "./rder.js" );

assert.deepEqual( rder( [ 1, 2, 3 ], "name" ),
	{ "1": 0, "2": 1, "3": 2 }, "should be equal to { '1': 0, '2': 1, '3': 2 }" );

console.log( "ok" );
