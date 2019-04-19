import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `
const Container = styledContainerQuery(Resizable)\`
  background-color: beige;
  
  &:container(min-width: 150px and max-width: 300px) {
    background-color: yellow;
  }
\`
render(
  <Container />
)
`.trim()

const MinMaxWidthPx = ({ ...props }) => <ExampleBlock title="min-width and max-width in px" {...props} code={code} />

export default MinMaxWidthPx
