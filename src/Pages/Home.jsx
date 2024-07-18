import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services';
import Teams from '../components/Teams/Teams'; 
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Services />
        <Teams />
        <Products />
        <Footer />
    </div>
  )
}

export default Home