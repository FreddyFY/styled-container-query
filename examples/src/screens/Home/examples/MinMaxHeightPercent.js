import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `
const Container = styledContainerQuery(Resizable)\`
  background-color: beige;
  
  &:container(min-height: 45% and max-height: 55%) {
    background-color: yellow;
  }
\`
render(
  <Container />
)
`.trim()

const MinMaxHeightPercent = ({ ...props }) => (
  <ExampleBlock title="min-height and max-height in %" {...props} code={code} />
)

export default MinMaxHeightPercent
