import React from 'react'
import ResizerArticle from './screens/ResizerArticle'
import { createGlobalStyle } from 'styled-components'
import Header from './layouts/Header'
import GithubCorner from './layouts/GithubCorner'
import SimpleUsage from './screens/SimpleUsage'

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
      <ResizerArticle />
      <SimpleUsage />
    </div>
  )
}

export default App
