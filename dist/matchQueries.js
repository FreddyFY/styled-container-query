"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var matchQueries = function matchQueries(rules, _ref) {
  var width = _ref.width,
      height = _ref.height;
  var entries = Object.keys(rules).map(function (className) {
    var rule = rules[className];
    return {
      minWidth: rule.minWidth != null ? rule.minWidth : 0,
      maxWidth: rule.maxWidth != null ? rule.maxWidth : Infinity,
      minHeight: rule.minHeight != null ? rule.minHeight : 0,
      maxHeight: rule.maxHeight != null ? rule.maxHeight : Infinity,
      className: className
    };
  });
  var filterd = entries.filter(function (_ref2) {
    var minWidth = _ref2.minWidth,
        maxWidth = _ref2.maxWidth,
        minHeight = _ref2.minHeight,
        maxHeight = _ref2.maxHeight;

    if (height != null && width != null) {
      return minWidth <= width && width <= maxWidth && minHeight <= height && height <= maxHeight;
    }

    if (height == null && width != null) {
      return minWidth <= width && width <= maxWidth;
    }

    if (height != null && width == null) {
      return minHeight <= height && height <= maxHeight;
    }

    return true;
  });
  return filterd.map(function (entry) {
    return entry.className;
  });
};

var _default = matchQueries;
exports["default"] = _default;