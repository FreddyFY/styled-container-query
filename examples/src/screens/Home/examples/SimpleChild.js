import React from 'react'
import ExampleBlock from '../components/ExampleBlock'

const code = `

const Child = styled.div\`
  background-color: lightblue;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 100px;
\`

const Container = styledContainerQuery(Resizable)\`
  padding: 1em;
  background-color: beige;
  
  &:container(min-width: 300px) {
    $\{Child}  {
      background-color: darkblue;
      color: #fff;
    }
  }
\`
render(
  <Container ><Child>Child</Child></Container>
)
`.trim()

const SimpleChild = ({ ...props }) => <ExampleBlock title="min-width child styling" {...props} code={code} />

export default SimpleChild
