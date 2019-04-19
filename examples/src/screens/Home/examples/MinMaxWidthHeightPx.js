import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `
const Container = styledContainerQuery(Resizable)\`
  background-color: beige;
  
  &:container(min-width: 200px and max-width: 300px and min-height: 200px and max-height: 300px) {
    background-color: yellow;
  }
\`
render(
  <Container />
)
`.trim()

const MinMaxWidthHeightPx = ({ ...props }) => (
  <ExampleBlock title="min-width and max-width and min-height and max-height in px" {...props} code={code} />
)

export default MinMaxWidthHeightPx
