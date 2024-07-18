import React from 'react'
import './products.css'
import productImg from '../../assets/productImg.png'
import Prod from './Prod'
import ProductImages from './ProductImages'

const Products = () => {

    
  return ( 
    <div className="products">
        <h1>Our Products</h1>
        <button>Explore</button>
        <Prod />
        <div className="product-image">
            <img src={productImg} alt="" />
        </div>

        <ProductImages />
    </div>
  )
}

export default Products