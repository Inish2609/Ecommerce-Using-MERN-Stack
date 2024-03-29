import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import NavBar from '../Components/NavBar'
import Announcement from '../Components/Announcement'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

export const Product = () => {

    const Container = styled.div`
        
    `
    const Wrapper = styled.div`
        padding: 50px;
        display: flex;
    `
    const ImgContainer = styled.div`
        flex: 1;
    `
    const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    object-position: 0px 50px;
    
    `
    const InfoContainer = styled.div`
        flex: 1;
        padding: 0px 50px;
    `
    const Title = styled.h1`
        font-weight: 300px;
    `
    const Desc = styled.p`
        margin: 20px 0px;
    `
    const Price = styled.span`
        font-weight: 100;
        font-size: 40px;
    `
    const FilterContainer = styled.div`
        width: 50%;
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
    `
    const Filter = styled.div`
        display: flex;
        align-items: center;
    `
    const FilterTitle = styled.span`
        font-size: 20px;
        font-weight: 300;
    `
    const FilterColor = styled.div`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.color};
      margin: 0px 5px;
      cursor: pointer;
    `;
    const FilterSize = styled.select`
        margin-left: 10px;
        padding: 5px;
    `
    const FilterSizeOption = styled.option`

    `
    const AddContainer = styled.div`
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
    const AmountContainer = styled.div`
        display: flex;
        align-items: center;
        font-weight: 700;
    `
    const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    `
    const Button = styled.button`
        padding: 15px;
        background-color: white;
        border: 2px solid teal;
        cursor: pointer;
        font-weight: 700;
        
        &:hover{
            background-color: #f8f4f4;
        }
    `
    const [product,setProduct] = useState({})
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(()=>{
      const getProduct = async ()=>{
        try{
          const res = await axios.get(`http://localhost:5000/products/find/${id}`)
          setProduct(res.data)
        }
        catch(err){

        }
      }
      getProduct()
    },[id])

    console.log(product)

    const [quantity,setQuantity] = useState(1)
    const [color,setColor] = useState("");
    const [size,setSize] = useState("")

    const handleQuantity = (type)=>{
      if(type === "desc"){
        quantity>1 && setQuantity(quantity-1)
      }
      else{
        setQuantity(quantity + 1);
      }
    }

    console.log(size,color)

    const dispatch = useDispatch()

    const handleClick = ()=>{
      dispatch(addProduct({...product,size,color,quantity,price:product.price}))
    }

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                {product.size?.map((c) => (
                  <FilterSizeOption value={c}>{c}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("desc")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}
