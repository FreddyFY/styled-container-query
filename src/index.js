import React from 'react'
import styled from 'styled-components'
import hoistStatics from 'hoist-non-react-statics'
import domElements from './dom-elements'
import newClassName from './utils/new-class-name'
import kebabToCamel from './utils/kebab-to-camel'
import removeUnit from './utils/remove-unit'
import { withQueryContainer } from './QueryContainer'

function parseCss(css) {
  const delimiter = '$$'
  const regExContainer = /:container\(([^)]+)\)/g

  const query = {}
  const cssStrings = css
    .join(delimiter)
    .replace(regExContainer, (full, params, index) => {
      const className = newClassName(full + index)
      query[className] = parseContainerFn(params)
      return `.${className}`
    })
    .split(delimiter)
  return { cssStrings, query }
}

function parseContainerFn(params) {
  const defRe = '((min-\\w+|max-\\w+)\\s*:\\s*(\\d+px))'
  const singleParameters = params.split(/\s+and\s+/)
  return singleParameters.reduce((accumulator, stringParam) => {
    const [, , key, value] = stringParam.match(defRe)
    accumulator[kebabToCamel(key)] = removeUnit(value)
    return accumulator
  }, {})
}

const constructWithOptions = Component => (strings, ...expressions) => {
  const { cssStrings, query } = parseCss(strings)
  const StyledComponent = styled(Component)(cssStrings, ...expressions)
  const StyledContainerQuery = withQueryContainer(StyledComponent, query)
  return hoistStatics(StyledContainerQuery, StyledComponent)
}

const styledContainerQuery = (() => {
  const styledCQ = constructWithOptions
  domElements.forEach(domElement => {
    styledCQ[domElement] = constructWithOptions(domElement)
  })
  return styledCQ
})()

export default styledContainerQuery
