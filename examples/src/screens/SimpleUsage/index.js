import React from 'react'
import styled from 'styled-components'
import styledContainerQuery from '../../../../src'
import Resizable from 're-resizable'

const Wrapper = styled.div``

const Box = styledContainerQuery(Resizable)`
  background-color: #62b22f;
  
  &:container(min-width: 300px) {
    background-color: yellow;
  }
  
  &:container(min-height: 300px) {
    background-color: lightblue;
  }
`


const Link = styled.a`
  color: #62b22f;
  font-size: 0.8em;
`

const SimpleUsage = props => (
  <Wrapper {...props}>
    <Box
      defaultSize={{
        width: 100,
        height: 100,
      }}
    />
    <Link
      href="https://github.com/FreddyFY/styled-container-query/blob/master/examples/src/screens/SimpleUsage/index.js"
      target="_blank"
    >
      » Source on Github
    </Link>
  </Wrapper>
)

export default SimpleUsage
