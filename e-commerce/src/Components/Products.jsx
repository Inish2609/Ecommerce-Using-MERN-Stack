import React, { useEffect, useState } from 'react'
// import { popularProducts } from '../data'
import { styled } from 'styled-components'
import Product from './Product'
import axios from 'axios'

const Products = ({cat,filter,sort}) => {
  console.log(cat, filter, sort);
    const Container = styled.div`
        display: flex;
        padding: 20px;
        flex-wrap: wrap;
    `
    const [products,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])

    useEffect(()=>{
      const getProducts = async ()=>{
        try{
          const res = await axios.get(cat ? `http://localhost:5000/products/find?category=${cat}` : "http://localhost:5000/products/find")
          setProducts(res.data)
        }
        catch(err){
        }
      }
      getProducts()
    },[cat]);

    useEffect(()=>{
      cat && setFilteredProducts(
        products.filter((item)=>
          Object.entries(filter).every(([key,value])=>
            item[key].includes(value)
          )
        )
      )
    },[products,cat,filter])

    useEffect(()=>{
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    },[sort])

  return (
    <Container>
        {filteredProducts.map((item)=>(
            <Product item = {item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products