import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'

const Product = ({item}) => {

    const InfoContainer = styled.div`
        opacity: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1.5s ease;
        cursor: pointer;
    `;

    const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${InfoContainer}{
        opacity: 1;
    } 
    `
    const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    `
    const Image = styled.img`
    height: 75%;
    z-index: 2;
    /* display: block;
    margin-left: auto;
    margin-right: auto; */
    `
    const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
    `

  return (
    <Container>
        <Circle/>
        <Image src= {item.img} />
        <InfoContainer>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to = {`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </InfoContainer>
    </Container>
  )
}

export default Product