import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Announcement from '../Components/Announcement'
import { styled } from 'styled-components'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router'


const ProductList = () => {

    const Container = styled.div`
        
    `
    const Title = styled.h1`
    margin: 20px;
    `
    const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `
    const Filter = styled.div`
    
    `
    const FilterText = styled.span`
      font-size: 20px;
      font-weight: 600;
    `
    const Select = styled.select`
      padding: 10px;
      margin: 20px;
    `
    const Option = styled.option`
      
    `

    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    console.log(cat)

    const [filter,setFilters] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filter,
        [e.target.name] : value
      })
    };

    console.log(filter);

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>Dresees</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={handleFilters} value={filter.color}>
            <Option selected>Color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>Gray</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters} value={filter.size}>
            <Option selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select onChange={(e) => setSort(e.target.value)} value={sort}>
            <Option value={"newest"} selected>
              Newest
            </Option>
            <Option value={"asc"}>Price (Asc)</Option>
            <Option value={"desc"}>Price (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList