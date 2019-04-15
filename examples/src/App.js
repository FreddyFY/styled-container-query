import React from 'react'
import styled from 'styled-components'
import styledContainerQuery from '../../src'

const Child = styled.span`
  padding: 20px;
  margin: 20px;
  font-family: sans-serif;
  line-height: 1.4;
  letter-spacing: 0.5px;
  background-color: ghostwhite;
  border-radius: 3px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);

  color: darkslateblue;

  &::before {
    content: 'Default (Parent e.g. "Container" is < 500px wide and < 500px tall)';
  }
`

const Component = styledContainerQuery.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 10px;
  border-radius: 5px;

  background-color: aquamarine;

  &:container(min-width: 400px) {
    background-color: rosybrown;

    ${Child}::before {
      content: 'Container is >= 400px wide (but not between 450px and 500px or > 500px tall)';
    }
  }
  
  &:container(min-width: 450px and max-width: 500px) {
    background-color: lavender;

    ${Child}::before {
      content: 'Container is >= 450px and <= 500px wide and < 500px tall';
    }
  }
  
  &:container(min-height: 500px and min-width: 0px) {
    background-color: salmon;

    ${Child}::before {
      content: 'Container is >= 500px tall';
    }
  }
`

function App() {
  return (
    <div className="App">
      <h1>Applying Styles Based On Container Queries</h1>
      <Component>
        <Child />
      </Component>
      <h2>Resize The Box Below To Test It Out</h2>
      <h4>(Click-drag the bottom-right corner)</h4>
    </div>
  )
}

export default App
