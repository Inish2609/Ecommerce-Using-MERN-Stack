import React from 'react'
import NavBar from '../Components/NavBar'
import Announcement from '../Components/Announcement'
import Sliders from '../Components/Sliders'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Sliders/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home