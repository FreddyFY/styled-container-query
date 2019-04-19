import React from 'react'
import styled from 'styled-components'
import MinWidthPx from './examples/MinWidthPx'

const Wrapper = styled.div``

const Home = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <MinWidthPx/>
    </Wrapper>
  )
}

export default Home
