import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const KEY = "pk_test_51NbxoLSDyhENY9t0wtagKTQiGQS7lMTpMYkz9FsxRUSnVctPJlIAEMJmCdHpsp7MlmCPp9GUaBnKKWThH5vjZsEl002I3uxKzm"
const Pay = () => {

  const [stripeToken , setStripeToken] = useState(null)

  const onToken = (token)=>{
    setStripeToken(token)
  }
  
  const nav = useNavigate()

  useEffect(()=>{
    const makeRequest = async()=>{
    try{
        const res = await axios.post("http://localhost:5000/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data)
       nav("/success");
      }
    catch(err){
      console.log(err)
    }
  }
  stripeToken && makeRequest()
  },[stripeToken,nav])
    const Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    const ButtonContainer = styled.div`
    `;
    const Button = styled.button`
        padding: 15px;
        border-radius: 20px;
        width: 150%;
        background-color: black;
        color: white;
        cursor: pointer;
    `

  return (
    <Container>
      <ButtonContainer>
        {stripeToken ? (
          <span>Processing Please Wait!!!!</span>
        ) : (
          <StripeCheckout
            name="Inish shop"
            image="https://freepngimg.com/thumb/dress/176121-girl-dress-long-free-photo.png"
            billingAddress
            shippingAddress
            description="Your Total is 20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <Button>Payment</Button>
          </StripeCheckout>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default Pay;