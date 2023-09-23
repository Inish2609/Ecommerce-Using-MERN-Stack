import React from 'react'
import { styled } from 'styled-components'
import img1 from "../Image/1.png"
import { useLocation } from 'react-router';

const Success = () => {

    const Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    const Wrapper = styled.div`
    `;
    const ImageContainer = styled.div`
        padding-left: 150px;
    `
    const Image = styled.img`
        width: 50%;
        height: 50%;
        border-radius: 50%;
        padding-left: 30px;
    `
    const InfoContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
    const Message = styled.div`
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: teal;
        color: white;
    `
    const Desc = styled.p`
    
    `
    const location = useLocation()

    console.log(location)

  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src={img1} />
            </ImageContainer>
            <InfoContainer>
                <Message>
                    SUCCESSFUL
                </Message>
                <Desc>
                    Your Order Is Being Prepared.Thanks For Choosing Inish Shop
                </Desc>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Success