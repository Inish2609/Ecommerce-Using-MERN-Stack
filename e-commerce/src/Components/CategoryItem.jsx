import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'

export const CategoryItem = ({item}) => {

    const Container = styled.div`
        flex:1;
        height: 30vw;
        margin: 3px;
        position: relative;
    `
    const Image = styled.img`
      object-fit: cover;
      height: 100%;
      width: 100%;
    `;
    const InfoContainer = styled.div`
    position: absolute;
    top : 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
    const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    `
    const Button = styled.button`
        color: gray;
        background-color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-weight: 600;
    `

  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>  
      </Link>
    </Container>
  )
}
