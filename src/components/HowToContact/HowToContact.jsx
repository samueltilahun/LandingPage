import React from 'react'
import './howToContact.css'
import flowerImg from '../../assets/contactFlower.png'

const HowToContact = () => {
  return (
    <div className="how-to-contact">
        <div className="left-contact">
            <h1>How to contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. </p>
        </div>
        <div className="right-contact">
            <img src={flowerImg} alt="" />
        </div>
    </div>
  )
}

export default HowToContact