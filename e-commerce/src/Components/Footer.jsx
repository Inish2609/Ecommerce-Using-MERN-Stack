import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
    const Container = styled.div`
        display: flex;
    `
    const Left = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding:20px;
    `
    const Logo = styled.h1`

    `
    const Desc = styled.p`
    margin: 20px 0px;
    `
    const SocialContainer = styled.div`
    display: flex;
    `
    const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    `
    const Center = styled.div`
      flex: 1;
      padding: 20px;
    `;
    const Title = styled.h3`
      margin-bottom: 30px;
    `
    const List = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    `
    const ListItem = styled.li`
    width: 50%;
      margin-bottom: 10px;
    `
    const Right = styled.div`
      flex: 1;
      padding: 20px;
    `;
    const ContactItems = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    `
    const Payments = styled.img`
    width: 50%;
    `

  return (
    <Container>
      <Left>
        <Logo>INISH RAJ B</Logo>
        <Desc>The WebSite is made by INISH RAJ B</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UseFull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Help</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItems>
          <Room style={{ marginRight: "20px" }} />
          3/89B Kaaniyala Swamy Kovil Street Avaraikulam
        </ContactItems>
        <ContactItems>
          <Phone style={{ marginRight: "20px" }} />
          9500462466
        </ContactItems>
        <ContactItems>
          <MailOutline style={{ marginRight: "20px" }} />
          inishraj.b.s003@gmail.com
        </ContactItems>
        <Payments src="https://www.transparentpng.com/thumb/payment-method/XZ8Irh-payment-method-png-picture.png" />
      </Right>
    </Container>
  );
}

export default Footer