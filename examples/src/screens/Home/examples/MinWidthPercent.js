import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `
const Container = styledContainerQuery(Resizable)\`
  background-color: beige;
  
  &:container(min-width: 50%) {
    background-color: yellow;
  }
\`
render(
  <Container />
)
`.trim()

const MinWidthPercent = ({ ...props }) => <ExampleBlock title="min-width in %" {...props} code={code} />

export default MinWidthPercent
