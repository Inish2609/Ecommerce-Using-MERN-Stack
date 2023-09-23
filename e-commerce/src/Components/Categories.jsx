import React from 'react'
import {categories} from "../data"
import { styled } from 'styled-components'
import { CategoryItem } from './CategoryItem'

const Categories = () => {
    const Container = styled.div`
        display: flex;
    `
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItem item = {item} />
        ))}
    </Container>
  )
}

export default Categories