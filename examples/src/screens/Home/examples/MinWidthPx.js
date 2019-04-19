import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `
const Container = styledContainerQuery(Resizable)\`
  background-color: beige;
  
  &:container(min-width: 300px) {
    background-color: yellow;
  }
\`
render(
  <Container />
)
`.trim()

const MinWidthPx = ({ ...props }) => <ExampleBlock title="min-width in px" {...props} code={code} />

export default MinWidthPx
