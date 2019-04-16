import React from 'react'
import styled from 'styled-components'
import styledContainerQuery from '../../../src'
import UnsplashBadge, { UnsplashBadgeName, UnsplashBadgeWrapper } from './UnsplashBadge'

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  box-sizing: border-box;
`

const ImageWrapper = styledContainerQuery.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  ${UnsplashBadgeName} {
    display: none;
  }
  
  &:container(min-width: 450px) {
    ${UnsplashBadgeName} {
      display: inline-block;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  font-size: 1em;
  font-weight: bold;
`

const Description = styled.p`
  display: none;
  font-size: 0.9em;
  line-height: 1.4;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
`

const Wrapper = styledContainerQuery.article`
  box-shadow: 2px 5px 25px rgba(0, 0, 0, .2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:container(min-width: 300px) {
    ${Image} {
      padding: 1em;
    }
    ${Content} {
      padding-top: 0;
    }
  }
  
  &:container(min-width: 400px) {
    ${Description} {
      display: block;
    }
    ${Title} {
      font-size: 1.5em;
      margin: 0 0 0.5em;
    }
  }
  
  &:container(min-width: 700px) {
    flex-direction: row;
    
    ${ImageWrapper} {
      width: 50%;
    }
    ${Content} {
      flex: 1;
      padding: 1em 1em 1em 0;
    }
    ${Description} {
      display: none;
    }
  }
  
  &:container(min-width: 1000px) {
    ${ImageWrapper} {
      width: ${100 / 3}%;
    }
    
    ${Description} {
      display: block;
    }
  }
`

const Article = ({ ...props }) => (
  <Wrapper {...props}>
    <ImageWrapper>
      <Image src="https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=1200" />
      <UnsplashBadge
        name="Casey DeViese"
        link="https://unsplash.com/@c4s3y_d3vi?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
      />
    </ImageWrapper>
    <Content>
      <Title>Bacon ipsum dolor amet sirloin rump ipsum swine</Title>
      <Description>
        Spicy jalapeno bacon ipsum dolor amet venison pig biltong swine ham hock porchetta. Tenderloin porchetta sirloin
        shankle, ham spare ribs bresaola buffalo capicola pork turducken landjaeger. Sausage turkey shankle corned beef,
        shoulder fatback hamburger meatloaf andouille tail ball tip boudin chuck beef ribs. Pastrami brisket cupim
        pancetta fatback, drumstick buffalo doner shankle tri-tip tenderloin. Frankfurter meatball kielbasa, t-bone
        bresaola pig shankle.
      </Description>
    </Content>
  </Wrapper>
)

export default Article
