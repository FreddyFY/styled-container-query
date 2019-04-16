"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var kebabToCamel = function kebabToCamel(kebab) {
  return kebab.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

var _default = kebabToCamel;
exports["default"] = _default;