/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.ExpressionStatement = ExpressionStatement;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var metadata = {
  optional: true,
  group: "builtin-setup"
};

exports.metadata = metadata;

function ExpressionStatement(node) {
  if (this.get("expression").isIdentifier({ name: "debugger" })) {
    this.remove();
  }
}