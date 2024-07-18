import React from 'react'
import './ourLocation.css'
import flowerImg from '../../assets/ourLocationFlower.png'

const OurLocation = () => {
  return (
    <div className="ourLocation">
        <div className="flower">
            <img src={flowerImg} alt="" />
        </div>
        <div className="our-location">
            <h1>Our location</h1>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. </p>
                <div className='line-column'></div>
            </div>
        </div>
    </div>
  )
}

export default OurLocation