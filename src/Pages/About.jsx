import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import AboutHero from '../components/AboutHero/AboutHero'
import AboutCardsSection from '../components/AboutCardsSection/AboutCardsSection' 
import OurLocation from '../components/OurLocation/OurLocation'
import HowToContact from '../components/HowToContact/HowToContact'
import OurPartners from '../components/OurPartners/OurPartners'

const About = () => {
  return (
    <div className='about'>
        <Navbar />
        <AboutHero />
        <AboutCardsSection />
        <OurLocation />
        <HowToContact />
        <OurPartners />
        <Footer />
    </div>
  )
}

export default About