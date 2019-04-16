import styled from 'styled-components'
import React, { Component } from 'react'
import Article from './Article'

const Wrapper = styled.div``

const Slider = styled.input`
  width: 70%;
  margin-left: 15%;
  padding: 1em 0;
`

const ArticleWrapper = styled.div`
  display: flex;
`

const Col = styled.div`
  box-sizing: border-box;
`

const SeeCode = styled.a`
  color: #62b22f;
  font-size: .8em;
`

class ResizerArticle extends Component {
  state = { value: 50 }
  constructor() {
    super()
    this.sliderRef = React.createRef()
  }

  handleSliderChange = () => {
    const { value } = this.sliderRef.current
    this.setState({ value: value })
  }

  render() {
    const { ...props } = this.props
    return (
      <Wrapper {...props}>
        <Slider
          value={this.state.value}
          onChange={this.handleSliderChange}
          type="range"
          ref={this.sliderRef}
          min={15}
          max={85}
          step={0.1}
        />
        <ArticleWrapper>
          <Col style={{ width: this.state.value + '%' }}>
            <Article />
            <Article />
          </Col>
          <Col style={{ width: 100 - this.state.value + '%' }}>
            <Article />
            <Article />
          </Col>
        </ArticleWrapper>
        <SeeCode href="https://github.com/FreddyFY/styled-container-query/blob/master/examples/src/components/Article.js" target="_blank">» Source on Github</SeeCode>
      </Wrapper>
    )
  }
}

export default ResizerArticle
