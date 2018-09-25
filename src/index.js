import React from 'react'
import styled from 'styled-components'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import domElements from './dom-elements'
import newClassName from './utils/new-class-name'
import kebabToCamel from './utils/kebab-to-camel'

function parseCss(css) {
  const delimiter = '$$'
  const regExContainer = /:container\(([^)]+)\)/g

  const query = {}
  css = css.join(delimiter)

  css = css.replace(regExContainer, (full, params, index) => {
    const className = newClassName(full + index)
    query[className] = parseContainerFn(params)
    return `.${className}`
  })

  css = css.split(delimiter)
  return [css, query]
}

function parseContainerFn(params) {
  const defRe = '((min-\\w+|max-\\w+)\\s*:\\s*(\\d+px))'
  const regExParams = new RegExp(['^\\s*', defRe, '(\\s+and\\s+)?', defRe, '?', '\\s*$'].join(''))

  let [, , k1, v1, , , k2, v2] = params.match(regExParams)
  const match = {}
  if (k1 === undefined) {
    return match
  }
  k1 = kebabToCamel(k1)
  match[k1] = removeUnit(v1)

  if (k2 === undefined) {
    return match
  }
  k2 = kebabToCamel(k2)
  match[k2] = removeUnit(v2)

  return match
}

function removeUnit(value) {
  return value.replace(/[^-\d.]/g, '')
}

const constructWithOptions = Component => (strings, ...expressions) => {
  const [cssStrings, query] = parseCss(strings)
  const StyledComponent = styled(Component)(cssStrings, ...expressions)
  const StyledContainerQuery = ({ className, ...f }) => (
    <ContainerQuery query={query}>
      {params => <StyledComponent className={classNames(params, className)} {...f} />}
    </ContainerQuery>
  )
  return Object.assign(StyledContainerQuery, StyledComponent)
}

const styledContainerQuery = (() => {
  const styledCQ = constructWithOptions
  domElements.forEach(domElement => {
    styledCQ[domElement] = constructWithOptions(domElement)
  })
  return styledCQ
})()

export default styledContainerQuery
