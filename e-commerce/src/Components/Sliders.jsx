import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {slideItems} from '../data'

const Sliders = () => {

    const Container = styled.div`
      width: 100%;
      height: 100vh;
      display: flex;
      position: relative;
      overflow: hidden;
      transition: width 2s, height 4s;
    `;
    const Arrow = styled.div`
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${(props) => props.direction === "left" && "10px"};
      right: ${(props) => props.direction === "right" && "10px"};
      margin: auto;
      cursor: pointer;
      opacity: 0.5;
      z-index: 2;
    `;
    const Wrapper = styled.div`
      height: 100%;
      display: flex;
      transform: translateX(${(props) => props.slideIndex * -100}vw);
    `;
    const Sliders = styled.div`
      display: flex;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: #${(props) => props.bg};
    `;
    const ImgContainer = styled.div`
    height: 100%;
    flex:1;
    `
    const Image = styled.img`
    height: 80%;
    `
    const InfoContainer = styled.div` 
    flex:1;
    padding: 50px;
    align-items: center;
    justify-content: center;
    `
    const Title = styled.h1`
      font-size: 70px;
    `
    const Desc = styled.p`
      font-size: 20px;
      margin: 50px 0px;
      font-weight: 500;
      letter-spacing: 3px;
    `
    const Button = styled.button`
      padding: 10px;
      background-color: transparent;
      cursor: pointer;
      font-size: 16px;
    `
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction)=>{
      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : slideItems.length-1)
      }
      else{
        setSlideIndex(slideIndex < slideItems.length-1 ? slideIndex+1 : 0);
      }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item) => (
          <Sliders bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Sliders>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
}

export default Sliders