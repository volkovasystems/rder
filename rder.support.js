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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var protype = require("protype");
var raze = require("raze");
var stringe = require("stringe");
var truly = require("truly");

var rder = function rder(array, point) {
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

	if ((typeof array === "undefined" ? "undefined" : (0, _typeof3.default)(array)) != "object") {
		throw new Error("invalid array");
	}

	if (truly(point) && !protype(point, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid point");
	}

	return raze(array).reduce(function (order, element, index) {
		if (truly(point) && truly(element[point])) {
			order[element[point]] = index;

		} else {
			order[stringe(element)] = index;
		}

		return order;
	}, {});
};

module.exports = rder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJkZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJwcm90eXBlIiwicmVxdWlyZSIsInJhemUiLCJzdHJpbmdlIiwidHJ1bHkiLCJyZGVyIiwiYXJyYXkiLCJwb2ludCIsIkVycm9yIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwicmVkdWNlIiwib3JkZXIiLCJlbGVtZW50IiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDekM7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJLFFBQU9ELEtBQVAsdURBQU9BLEtBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUosTUFBT0csS0FBUCxLQUFrQixDQUFDUCxRQUFTTyxLQUFULEVBQWdCRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFsQyxDQUF2QixFQUFtRTtBQUNsRSxRQUFNLElBQUlILEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPTixLQUFNSSxLQUFOLEVBQWNNLE1BQWQsQ0FBc0IsVUFBRUMsS0FBRixFQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUE2QjtBQUN6RCxNQUFJWCxNQUFPRyxLQUFQLEtBQWtCSCxNQUFPVSxRQUFTUCxLQUFULENBQVAsQ0FBdEIsRUFBaUQ7QUFDaERNLFNBQU9DLFFBQVNQLEtBQVQsQ0FBUCxJQUE0QlEsS0FBNUI7O0FBRUEsR0FIRCxNQUdLO0FBQ0pGLFNBQU9WLFFBQVNXLE9BQVQsQ0FBUCxJQUE4QkMsS0FBOUI7QUFDQTs7QUFFRCxTQUFPRixLQUFQO0FBQ0EsRUFUTSxFQVNKLEVBVEksQ0FBUDtBQVVBLENBaENEOztBQWtDQUcsT0FBT0MsT0FBUCxHQUFpQlosSUFBakIiLCJmaWxlIjoicmRlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJyZGVyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJyZGVyL3JkZXIuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInJkZXIuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicmRlclwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcmRlci5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInJkZXItdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDcmVhdGUgb3JkZXIgZnJvbSBhcnJheS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IHJkZXIgPSBmdW5jdGlvbiByZGVyKCBhcnJheSwgcG9pbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBcIlsqXVwiLFxuXHRcdFx0XHRcInBvaW50XCI6IFtcblx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHlwZW9mIGFycmF5ICE9IFwib2JqZWN0XCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XG5cdH1cblxuXHRpZiggdHJ1bHkoIHBvaW50ICkgJiYgIXByb3R5cGUoIHBvaW50LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHBvaW50XCIgKTtcblx0fVxuXG5cdHJldHVybiByYXplKCBhcnJheSApLnJlZHVjZSggKCBvcmRlciwgZWxlbWVudCwgaW5kZXggKSA9PiB7XG5cdFx0aWYoIHRydWx5KCBwb2ludCApICYmIHRydWx5KCBlbGVtZW50WyBwb2ludCBdICkgKXtcblx0XHRcdG9yZGVyWyBlbGVtZW50WyBwb2ludCBdIF0gPSBpbmRleDtcblxuXHRcdH1lbHNle1xuXHRcdFx0b3JkZXJbIHN0cmluZ2UoIGVsZW1lbnQgKSBdID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9yZGVyO1xuXHR9LCB7IH0gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmRlcjtcbiJdfQ==
//# sourceMappingURL=rder.support.js.map
