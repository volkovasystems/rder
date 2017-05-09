
const assert = require( "assert" );
const rder = require( "./rder.js" );

assert.deepEqual( rder( [ Array, RegExp, Object ], "name" ),
	{ "Array": 0, "RegExp": 1, "Object": 2 }, "should be deeply equal" );

console.log( "ok" );
