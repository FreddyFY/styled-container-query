"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactContainerQuery = require("react-container-query");

var _classnames = _interopRequireDefault(require("classnames"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _domElements = _interopRequireDefault(require("./dom-elements"));

var _newClassName = _interopRequireDefault(require("./utils/new-class-name"));

var _kebabToCamel = _interopRequireDefault(require("./utils/kebab-to-camel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  return [css, query];
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
  match[k1] = removeUnit(v1);

  if (k2 === undefined) {
    return match;
  }

  k2 = (0, _kebabToCamel["default"])(k2);
  match[k2] = removeUnit(v2);
  return match;
}

function removeUnit(value) {
  return value.replace(/[^-\d.]/g, '');
}

var constructWithOptions = function constructWithOptions(Component) {
  return function (strings) {
    var _parseCss = parseCss(strings),
        _parseCss2 = _slicedToArray(_parseCss, 2),
        cssStrings = _parseCss2[0],
        query = _parseCss2[1];

    for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      expressions[_key - 1] = arguments[_key];
    }

    var StyledComponent = (0, _styledComponents["default"])(Component).apply(void 0, [cssStrings].concat(expressions));

    var StyledContainerQuery = _react["default"].forwardRef(function (_ref, ref) {
      var className = _ref.className,
          f = _objectWithoutProperties(_ref, ["className"]);

      return _react["default"].createElement(_reactContainerQuery.ContainerQuery, {
        query: query
      }, function (params) {
        return _react["default"].createElement(StyledComponent, _extends({
          ref: ref,
          className: (0, _classnames["default"])(params, className)
        }, f));
      });
    });

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