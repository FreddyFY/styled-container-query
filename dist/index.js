"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _domElements = _interopRequireDefault(require("./dom-elements"));

var _newClassName = _interopRequireDefault(require("./utils/new-class-name"));

var _kebabToCamel = _interopRequireDefault(require("./utils/kebab-to-camel"));

var _removeUnit = _interopRequireDefault(require("./utils/remove-unit"));

var _QueryContainer = require("./QueryContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parseCss(css) {
  var delimiter = '$$';
  var regExContainer = /:container\(([^)]+)\)/g;
  var query = {};
  var cssStrings = css.join(delimiter).replace(regExContainer, function (full, params, index) {
    var className = (0, _newClassName["default"])(full + index);
    query[className] = parseContainerFn(params);
    return ".".concat(className);
  }).split(delimiter);
  return {
    cssStrings: cssStrings,
    query: query
  };
}

function parseContainerFn(params) {
  var defRe = '((min-\\w+|max-\\w+)\\s*:\\s*(\\d+px))';
  var singleParameters = params.split(/\s+and\s+/);
  return singleParameters.reduce(function (accumulator, stringParam) {
    var _stringParam$match = stringParam.match(defRe),
        _stringParam$match2 = _slicedToArray(_stringParam$match, 4),
        key = _stringParam$match2[2],
        value = _stringParam$match2[3];

    accumulator[(0, _kebabToCamel["default"])(key)] = (0, _removeUnit["default"])(value);
    return accumulator;
  }, {});
}

var constructWithOptions = function constructWithOptions(Component) {
  return function (strings) {
    var _parseCss = parseCss(strings),
        cssStrings = _parseCss.cssStrings,
        query = _parseCss.query;

    for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      expressions[_key - 1] = arguments[_key];
    }

    var StyledComponent = (0, _styledComponents["default"])(Component).apply(void 0, [cssStrings].concat(expressions));
    var StyledContainerQuery = (0, _QueryContainer.withQueryContainer)(StyledComponent, query);
    return (0, _hoistNonReactStatics["default"])(StyledContainerQuery, StyledComponent);
  };
};

var styledContainerQuery = function () {
  var styledCQ = constructWithOptions;

  _domElements["default"].forEach(function (domElement) {
    styledCQ[domElement] = constructWithOptions(domElement);
  });

  return styledCQ;
}();

var _default = styledContainerQuery;
exports["default"] = _default;