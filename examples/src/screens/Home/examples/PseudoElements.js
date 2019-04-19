import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `

const Container = styledContainerQuery(Resizable)\`
  padding: 1em;
  background-color: beige;
  
  &:before {
    content: "My width is smaller than 350px";
  }
  
  &:container(min-width: 350px) {
    &:before {
      content: "My width is bigger than 350px";
    }
  }
\`
render(
  <Container >{' '}</Container>
)
`.trim()

const PseudoElements = ({ ...props }) => (
  <ExampleBlock title="min-width pseudo-elements styling" {...props} code={code} />
)

export default PseudoElements
