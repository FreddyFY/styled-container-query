import React from 'react'
import styled from 'styled-components'
import LiveEdit from '../../../components/LiveEdit'
import Resizable from 're-resizable'

const Wrapper = styled.article``

const Title = styled.h1``

const Description = styled.p``

const StyledResizable = styled(props => (
  <Resizable
    {...props}
    defaultSize={{
      width: 200,
      height: 100,
    }}
  >Resize me</Resizable>
))`
  max-height: 100%;
  max-width: 100%;
  min-height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, .05);
`

const ExampleBlock = ({ title, description, code, scope = {}, ...props }) => (
  <Wrapper {...props}>
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
    <LiveEdit code={code} scope={{ ...scope, Resizable: StyledResizable }} />
  </Wrapper>
)

export default ExampleBlock
