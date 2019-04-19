import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from '@probablyup/react-live'
import styled from 'styled-components'
import styledContainerQuery from '../../../src'
import '../utils/prismTemplateStrings'

const StyledPreview = styled(LivePreview)`
  height: 100%;
  &:empty {
    display: none;
  }
`

const Switch = styled.div`
  width: calc(50% - 1em);
  border: 1px dashed #ccc;
  border-radius: 5px;
  padding: 0.5em;
  box-sizing: border-box;
  align-self: stretch;
  height: 350px;
`

const StyledEditor = styled(LiveEditor)`
  background-color: #f5f2f0;
  width: calc(50% - 1em);
  overflow-y: scroll;
  display: block;
  white-space: pre;
  padding: 0.5rem;
  margin: 0;
  box-sizing: border-box;
  vertical-align: baseline;
  outline: none;
  hyphens: none;
  text-shadow: none;
  word-wrap: normal;
  word-break: normal;
  text-align: left;
  word-spacing: normal;
  tab-size: 2;

  .token.interpolation,
  .token.scq-function,
  .token.string,
  & {
    color: #222;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }
  .token.comment {
    font-style: italic;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.attr-name {
    color: #f92672;
  }
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.styled-template-string,
  .token.and,
  .token.punctuation {
    color: #777;
  }
  .token.tag,
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #62b22f;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #e90;
    background: rgba(255, 255, 255, 0.5);
  }
  .token.atrule,
  .token.attr-value,
  .token.language-css .token.function,
  .token.styled-function,
  .token.keyword {
    color: #07a;
  }
  .token.styled-function .scq {
    font-weight: bold;
    background: rgba(255, 255, 255, 0.5);
  }
  .token.regex,
  .token.important {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.deleted {
    color: red;
  }
  .token.render-function {
    display: none;
  }
`

const StyledError = styled(LiveError)`
  display: block;
  width: 100%;
  color: white;
  white-space: pre;
  padding: 0.5rem;
  border-radius: 5px;
  box-sizing: border-box;
  background: #f55;
`

const StyledLiveProvider = styledContainerQuery(LiveProvider)`
  display: flex;
  justify-content: space-between;
  &:container(max-width: 1100px) {
    flex-direction: column;
    
    ${Switch} {
      width: 100%;
      margin-bottom: 1em;  
    }
    ${StyledEditor} {
      width: 100%;
    }
  }
`

const LiveEdit = ({ scope = {}, ...props }) => (
  <StyledLiveProvider
    {...props}
    scope={{ ...scope, React, styled, styledContainerQuery }}
    noInline
    mountStylesheet={false}
  >
    <Switch>
      <StyledPreview />
      <StyledError />
    </Switch>
    <StyledEditor />
  </StyledLiveProvider>
)

export default LiveEdit
