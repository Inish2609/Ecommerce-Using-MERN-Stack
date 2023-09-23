import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import NavBar from '../Components/NavBar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons'
// import { cartProducts } from '../data'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Cart = () => {
    const Container = styled.div`
        
    `
    const Wrapper = styled.div`
    padding: 20px;
    `
    const Title = styled.h1`
        font-weight: 300;
        text-align: center;
    `
    const Top = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding : 20px;
    `
    const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border : ${props=>props.type==="filled" && "none"};
        background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
        color: ${props=>props.type==="filled" && "white"};
    `
    const TopTexts = styled.div`
        
    `
    const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    `
    const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    `
    const Info = styled.div`
        flex : 3;
    `
    const MapContainer = styled.div`
        
    `
    const Product = styled.div`
    display:flex;
    justify-content: space-between;
    `
    const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    `;
    const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    `;
    const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `;
    const ProductName = styled.span`
    
    `;
    const ProductId = styled.span`
    
    `;
    const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    `;
    const ProductSize = styled.span`
    
    `;
    const PriceDetails = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom:20px;
    `
    const ProductAmount = styled.div`
        font-size: 24px;
        margin: 5px;
    `
    const ProductPrice = styled.div`
        font-size: 30px;
        font-weight: 300;
    `
    const Hr = styled.hr`
        background-color: #eee;
        border: none;
        height: 1px;
    `
    const Summary = styled.div`
      flex: 1;
      border: 0.5px solid lightgrey;
      border-radius: 10px;
      padding: 20px;
      height: 45vh;
    `;
    const SummaryTitle = styled.h1`
        font-weight: 200;
    `
    const SummaryItem = styled.div`
      margin: 30px 0px;
      display: flex;
      justify-content: space-between;
      font-weight: ${props=>props.type==="total" && "500"};
      font-size: ${(props) => (props.type === "total" && "30px")};
    `;
    const SummaryItemText = styled.span`
    
    `;
    const SummaryItemPrice = styled.span`
    
    `;
    const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color:black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    `

    const cart = useSelector(state=>state.cart)

    const KEY =
      "pk_test_51NbxoLSDyhENY9t0wtagKTQiGQS7lMTpMYkz9FsxRUSnVctPJlIAEMJmCdHpsp7MlmCPp9GUaBnKKWThH5vjZsEl002I3uxKzm";

    const [stripeToken,setStripeToken] = useState(null)

    const onToken = (token)=>{
      setStripeToken(token);
    }

    const nav = useNavigate();

    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await axios.post(
            "http://localhost:5000/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: cart.total * 100,
            }
          );
          console.log(res.data);
          nav("/success",{data : res.data});
        } catch (err) {
          console.log(err);
        }
      };
      stripeToken && makeRequest();
    }, [stripeToken, nav,cart.total]);

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((item) => (
              <MapContainer>
                <Product key={item._id}>
                  <ProductDetails>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Product : </b>
                        {item.title}
                      </ProductName>
                      <ProductId>
                        <b>ID : </b>
                        {item._id}
                      </ProductId>
                      <ProductColor color={item.color} />
                      <ProductSize>
                        <b>Size : </b>
                        {item.size}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add style={{ cursor: "pointer" }} />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove style={{ cursor: "pointer" }} />
                    </ProductAmountContainer>
                    <ProductPrice>{item.price * item.quantity}</ProductPrice>
                  </PriceDetails>
                </Product>
                <Hr />
              </MapContainer>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Inish shop"
              billingAddress
              shippingAddress
              description={`Your Total is ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Payment</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart