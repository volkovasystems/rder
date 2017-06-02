
const assert = require( "assert" );
const rder = require( "./rder.js" );

assert.deepEqual( rder( [ Array, RegExp, Object ], "name" ),
	{ "Array": 0, "RegExp": 1, "Object": 2 }, "should be deeply equal" );

assert.deepEqual( rder( [ 1, 2, 3 ], "name" ),
	{ "1": 0, "2": 1, "3": 2 }, "should be deeply equal" );

console.log( "ok" );
