import React, { useState } from "react";
import { styled } from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
  `;
  const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
  `;
  
  const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 20px 0px;
  `;
  
  const Link = styled.a`
    font-size: 12px;
    margin: 15px 0px;
    text-decoration: underline;
    cursor: pointer;
  `
  const [username, setUserName] = useState("");
  const [password , setPassword ] = useState("")

  const dispatch = useDispatch()

  const handleClick = (e)=>{
    e.preventDefault()
    login(dispatch, { username, password });
  }

  console.log(username);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input
            type={"text"}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
          />
          <Input
            placeholder="PassWord"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>Sign Up</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
