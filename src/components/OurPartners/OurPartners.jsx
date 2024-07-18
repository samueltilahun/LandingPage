import React from 'react'
import './ourPartners.css'
import Prod from '../Products/Prod'
import '../Products/products.css'
import ProductImages from '../Products/ProductImages'

const OurPartners = () => {
  return (
    <div className="our-partners">
        <h1>Our Partners</h1>
        <div>
        <Prod /> </div> 
        <ProductImages />
    </div>
  )
}

export default OurPartners