import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  color: #62b22f;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 3em;
  background-color: #eee;
`

const Header = ({ ...props }) => <Wrapper {...props}>Styled Container Query Demo</Wrapper>

export default Header
