import React from 'react'
import styled from 'styled-components'
import MinWidthPx from './examples/MinWidthPx'
import MinWidthPercent from './examples/MinWidthPercent'
import MinMaxWidthPx from './examples/MinMaxWidthPx'
import MinMaxHeightPercent from './examples/MinMaxHeightPercent'
import SimpleChild from './examples/SimpleChild'
import PseudoElements from './examples/PseudoElements'
import MinMaxWidthHeightPx from './examples/MinMaxWidthHeightPx'

const Wrapper = styled.div``

const Home = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <MinWidthPx />
      <MinWidthPercent />
      <MinMaxWidthPx />
      <MinMaxHeightPercent />
      <MinMaxWidthHeightPx />
      <SimpleChild />
      <PseudoElements />
    </Wrapper>
  )
}

export default Home
