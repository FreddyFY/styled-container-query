import * as ReactDOM from 'react-dom'
import React, { Component } from 'react'
import classNames from 'classnames'
import { ResizeObserver } from 'resize-observer'
import matchQueries from './matchQueries'

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
    const result = matchQueries(this.props.query, { width, height })
    this.setState({ additionalClassNames: result })
  }

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

const withQuery = (Component, query) =>
  React.forwardRef((props, ref) => (
    <QueryContainer query={query}>
      <Component {...props} ref={ref} />
    </QueryContainer>
  ))

export { withQuery }
