import * as ReactDOM from 'react-dom'
import React, { Component } from 'react'
import classNames from 'classnames'
import { ResizeObserver } from 'resize-observer'
import matchQueries from './matchQueries'
import unitToPx from './utils/unit-to-px'

class QueryContainer extends Component {
  state = {
    additionalClassNames: [],
  }
  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this)
    this.observer = new ResizeObserver(this.handleResize)
    this.observer.observe(this.element)
  }

  handleResize = entry => {
    if (entry.length !== 1) return
    const { width, height } = entry[0].contentRect
    const result = matchQueries(this.parseQueryUnits(this.props.query), { width, height })
    this.setState({ additionalClassNames: result })
  }

  parseQueryUnits = queries =>
    Object.keys(queries).reduce((accumulator, key) => {
      accumulator[key] = this.parseSingleQuery(queries[key])
      return accumulator
    }, {})

  parseSingleQuery = query => (
    Object.keys(query).reduce((accumulator, innerKey) => {
      accumulator[innerKey] = unitToPx(this.element, query[innerKey])
      return accumulator
    }, {})
  )

  componentWillUnmount() {
    this.observer.disconnect()
  }

  render() {
    const { children, query, ...props } = this.props
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        ...props,
        className: classNames(child.props.className, this.state.additionalClassNames),
      }),
    )
  }
}

const withQueryContainer = (Component, query) =>
  React.forwardRef((props, ref) => (
    <QueryContainer query={query}>
      <Component {...props} ref={ref} />
    </QueryContainer>
  ))

export { withQueryContainer }
