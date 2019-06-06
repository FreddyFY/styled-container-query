import React from 'react'
import styled from 'styled-components'
import styledContainerQuery from '../../../../src'
import { Resizable } from 're-resizable'

const Wrapper = styled.div`
  padding: 2em 0;
  border-top: 1px solid #ccc;
`

const Box = styledContainerQuery(Resizable)`
  background-color: #62b22f;
  
  &:container(min-width: 10% and max-width: 600px and min-height: 3em and max-height: 10cm) {
    background-color: yellow;
  }
`

const Link = styled.a`
  color: #62b22f;
  font-size: 0.8em;
`

const SimpleUsage = props => (
  <Wrapper {...props}>
    <pre>{`
&:container(min-width: 10% and max-width: 600px and min-height: 3em and max-height: 10cm) {
  background-color: yellow;
}
  `}</pre>
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
