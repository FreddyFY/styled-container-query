import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import GithubCorner from './components/GithubCorner'
import Home from './screens/Home'

const Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto-Slab|Montserrat:700');
  
  body {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;
    padding: 1em;
    margin: 0;
    color: #292f33;
  }
`

function App() {
  return (
    <div>
      <Styles />
      <Header />
      <GithubCorner />
      <Home />
    </div>
  )
}

export default App
