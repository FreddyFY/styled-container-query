"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function removeUnit(value) {
  return value.replace(/[^-\d.]/g, '');
}

var _default = removeUnit;
exports["default"] = _default;