"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shorthash = _interopRequireDefault(require("shorthash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newClassName = function newClassName(text) {
  return "cq-".concat(_shorthash["default"].unique(text));
};

var _default = newClassName;
exports["default"] = _default;