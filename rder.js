"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "rder",
			"path": "rder/rder.js",
			"file": "rder.js",
			"module": "rder",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/rder.git",
			"test": "rder-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Create order from array.
	@end-module-documentation

	@include:
		{
			"protype": "protype",
			"raze": "raze",
			"stringe": "stringe",
			"truly": "truly"
		}
	@end-include
*/

const protype = require( "protype" );
const raze = require( "raze" );
const stringe = require( "stringe" );
const truly = require( "truly" );

const rder = function rder( array, point ){
	/*;
		@meta-configuration:
			{
				"array:required": "[*]",
				"point": [
					"number",
					"string",
					"symbol"
				]
			}
		@end-meta-configuration
	*/

	if( typeof array != "object" ){
		throw new Error( "invalid array" );
	}

	if( truly( point ) && !protype( point, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid point" );
	}

	return raze( array ).reduce( ( order, element, index ) => {
		if( truly( point ) && truly( element[ point ] ) ){
			order[ element[ point ] ] = index;

		}else{
			order[ stringe( element ) ] = index;
		}

		return order;
	}, { } );
};

module.exports = rder;
