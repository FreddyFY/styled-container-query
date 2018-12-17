function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import hoistStatics from 'hoist-non-react-statics';
import domElements from './dom-elements';
import newClassName from './utils/new-class-name';
import kebabToCamel from './utils/kebab-to-camel';

function parseCss(css) {
  const delimiter = '$$';
  const regExContainer = /:container\(([^)]+)\)/g;
  const query = {};
  css = css.join(delimiter);
  css = css.replace(regExContainer, (full, params, index) => {
    const className = newClassName(full + index);
    query[className] = parseContainerFn(params);
    return `.${className}`;
  });
  css = css.split(delimiter);
  return [css, query];
}

function parseContainerFn(params) {
  const match = {};
  const defRe = '((min-\\w+|max-\\w+)\\s*:\\s*(\\d+px))';
  const regExParams = new RegExp(['^\\s*', defRe, '(\\s+and\\s+)?', defRe, '?', '\\s*$'].join(''));
  const parsedParams = params.match(regExParams);

  if (!parsedParams) {
    return match;
  }

  let [,, k1, v1,,, k2, v2] = parsedParams;

  if (k1 === undefined) {
    return match;
  }

  k1 = kebabToCamel(k1);
  match[k1] = removeUnit(v1);

  if (k2 === undefined) {
    return match;
  }

  k2 = kebabToCamel(k2);
  match[k2] = removeUnit(v2);
  return match;
}

function removeUnit(value) {
  return value.replace(/[^-\d.]/g, '');
}

const constructWithOptions = Component => (strings, ...expressions) => {
  const [cssStrings, query] = parseCss(strings);
  const StyledComponent = styled(Component)(cssStrings, ...expressions);
  const StyledContainerQuery = React.forwardRef((_ref, ref) => {
    let {
      className
    } = _ref,
        f = _objectWithoutProperties(_ref, ["className"]);

    return React.createElement(ContainerQuery, {
      query: query
    }, params => React.createElement(StyledComponent, _extends({
      ref: ref,
      className: classNames(params, className)
    }, f)));
  });
  return hoistStatics(StyledContainerQuery, StyledComponent);
};

const styledContainerQuery = (() => {
  const styledCQ = constructWithOptions;
  domElements.forEach(domElement => {
    styledCQ[domElement] = constructWithOptions(domElement);
  });
  return styledCQ;
})();

export default styledContainerQuery;