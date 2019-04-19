import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  background-color: black;
  color: white;
  margin: 0.5em 0;
  text-decoration: none;
  padding: 4px 6px;
  font-weight: bold;
  line-height: 0.9;
  display: inline-block;
  border-radius: 3px;
  position: absolute;
  left: 1.5em;
  bottom: 1.5em;
`

const Name = styled.span`
  display: inline-block;
  padding: 2px 3px;
  font-size: 12px;
`

const SvgWrapper = styled.span`
  display: inline-block;
  padding: 2px 3px;
  font-size: 12px;
`

const Svg = styled.svg`
  height: 12px;
  width: auto;
  position: relative;
  vertical-align: middle;
  top: -2px;
  fill: white;
`

const UnsplashBadge = ({ name, link }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer">
    <SvgWrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
      </Svg>
    </SvgWrapper>
    <Name>{name}</Name>
  </Wrapper>
)

export default UnsplashBadge
export { Wrapper as UnsplashBadgeWrapper, Name as UnsplashBadgeName }
