import React from 'react'
import prod1 from '../../assets/prod1.png'
import prod2 from '../../assets/prod2.png'
import prod3 from '../../assets/prod3.png'

const ProductImages = () => {
  return (
    <div className="product-images">
        <img src={prod1} alt="" />
        <img src={prod2} alt="" />
        <img src={prod3} alt="" />
    </div>
  )
}

export default ProductImages