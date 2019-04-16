"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _domElements = _interopRequireDefault(require("./dom-elements"));

var _newClassName = _interopRequireDefault(require("./utils/new-class-name"));

var _kebabToCamel = _interopRequireDefault(require("./utils/kebab-to-camel"));

var _removeUnit = _interopRequireDefault(require("./utils/remove-unit"));

var _ContainerQuery = _interopRequireWildcard(require("./ContainerQuery"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parseCss(css) {
  var delimiter = '$$';
  var regExContainer = /:container\(([^)]+)\)/g;
  var query = {};
  css = css.join(delimiter);
  css = css.replace(regExContainer, function (full, params, index) {
    var className = (0, _newClassName["default"])(full + index);
    query[className] = parseContainerFn(params);
    return ".".concat(className);
  });
  css = css.split(delimiter);
  return {
    css: css,
    query: query
  };
}

function parseContainerFn(params) {
  var match = {};
  var defRe = '((min-\\w+|max-\\w+)\\s*:\\s*(\\d+px))';
  var regExParams = new RegExp(['^\\s*', defRe, '(\\s+and\\s+)?', defRe, '?', '\\s*$'].join(''));
  var parsedParams = params.match(regExParams);

  if (!parsedParams) {
    return match;
  }

  var _parsedParams = _slicedToArray(parsedParams, 8),
      k1 = _parsedParams[2],
      v1 = _parsedParams[3],
      k2 = _parsedParams[6],
      v2 = _parsedParams[7];

  if (k1 === undefined) {
    return match;
  }

  k1 = (0, _kebabToCamel["default"])(k1);
  match[k1] = (0, _removeUnit["default"])(v1);

  if (k2 === undefined) {
    return match;
  }

  k2 = (0, _kebabToCamel["default"])(k2);
  match[k2] = (0, _removeUnit["default"])(v2);
  return match;
}

var constructWithOptions = function constructWithOptions(Component) {
  return function (strings) {
    var _parseCss = parseCss(strings),
        cssStrings = _parseCss.css,
        query = _parseCss.query;

    for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      expressions[_key - 1] = arguments[_key];
    }

    console.log(cssStrings, query, expressions);
    var StyledComponent = (0, _styledComponents["default"])(Component).apply(void 0, [cssStrings].concat(expressions));
    var StyledContainerQuery = (0, _ContainerQuery.withQuery)(StyledComponent, query);
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