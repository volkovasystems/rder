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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJkZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJwcm90eXBlIiwicmVxdWlyZSIsInJhemUiLCJzdHJpbmdlIiwidHJ1bHkiLCJyZGVyIiwiYXJyYXkiLCJwb2ludCIsIkVycm9yIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwicmVkdWNlIiwib3JkZXIiLCJlbGVtZW50IiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDekM7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJLFFBQU9ELEtBQVAsdURBQU9BLEtBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUosTUFBT0csS0FBUCxLQUFrQixDQUFDUCxRQUFTTyxLQUFULEVBQWdCRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFsQyxDQUF2QixFQUFtRTtBQUNsRSxRQUFNLElBQUlILEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPTixLQUFNSSxLQUFOLEVBQWNNLE1BQWQsQ0FBc0IsVUFBRUMsS0FBRixFQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUE2QjtBQUN6RCxNQUFJWCxNQUFPRyxLQUFQLEtBQWtCSCxNQUFPVSxRQUFTUCxLQUFULENBQVAsQ0FBdEIsRUFBaUQ7QUFDaERNLFNBQU9DLFFBQVNQLEtBQVQsQ0FBUCxJQUE0QlEsS0FBNUI7O0FBRUEsR0FIRCxNQUdLO0FBQ0pGLFNBQU9WLFFBQVNXLE9BQVQsQ0FBUCxJQUE4QkMsS0FBOUI7QUFDQTs7QUFFRCxTQUFPRixLQUFQO0FBQ0EsRUFUTSxFQVNKLEVBVEksQ0FBUDtBQVVBLENBaENEOztBQWtDQUcsT0FBT0MsT0FBUCxHQUFpQlosSUFBakIiLCJmaWxlIjoicmRlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInJkZXJcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicmRlci9yZGVyLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInJkZXIuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJyZGVyXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JkZXIuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInJkZXItdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDcmVhdGUgb3JkZXIgZnJvbSBhcnJheS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuXHJcbmNvbnN0IHJkZXIgPSBmdW5jdGlvbiByZGVyKCBhcnJheSwgcG9pbnQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFwiWypdXCIsXHJcblx0XHRcdFx0XCJwb2ludFwiOiBbXHJcblx0XHRcdFx0XHRcIm51bWJlclwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwic3ltYm9sXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIHR5cGVvZiBhcnJheSAhPSBcIm9iamVjdFwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggdHJ1bHkoIHBvaW50ICkgJiYgIXByb3R5cGUoIHBvaW50LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcG9pbnRcIiApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJhemUoIGFycmF5ICkucmVkdWNlKCAoIG9yZGVyLCBlbGVtZW50LCBpbmRleCApID0+IHtcclxuXHRcdGlmKCB0cnVseSggcG9pbnQgKSAmJiB0cnVseSggZWxlbWVudFsgcG9pbnQgXSApICl7XHJcblx0XHRcdG9yZGVyWyBlbGVtZW50WyBwb2ludCBdIF0gPSBpbmRleDtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0b3JkZXJbIHN0cmluZ2UoIGVsZW1lbnQgKSBdID0gaW5kZXg7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG9yZGVyO1xyXG5cdH0sIHsgfSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZGVyO1xyXG4iXX0=
//# sourceMappingURL=rder.support.js.map
