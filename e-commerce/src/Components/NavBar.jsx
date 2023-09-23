import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'
import {mobile} from "../Responsive"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const Container = styled.div`
        height: 60px;
        ${mobile({height:"50px"})};
    `
    const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${mobile({ padding: "10px 0px" })}
    `;
    const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    `

    const Language = styled.span`
      font: 16px;
      cursor: pointer;
      ${mobile({ display: "none" })}
    `;

    const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
    `

    const Input = styled.input`
      border: none;
      ${mobile({ width: "50px" })}
    `;

    const Center = styled.div`
      flex: 1;
      text-align: center;
    `;

    const Logo = styled.h1`
      font-size: 25px;
      font-weight: bold;
      font-style: italic;
      ${mobile({ fontSize: "24px" })}
    `;

    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ${mobile({ justifyContent: "center",flex: 2 })}
    `;

    const MenuItem = styled.div`
      font-size: 20px;
      cursor: pointer;
      margin-left: 35px;
      ${mobile({ fontSize: "12px",marginLeft: "10px" })}
    `;

    const cart = useSelector(state => state.cart)
    console.log(cart)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENGLISH</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DHANUX SHOP</Logo>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <Link to='/cart'>
          <MenuItem>
            <Badge badgeContent={cart.quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;