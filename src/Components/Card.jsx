import React from 'react'
import "./Card.css"
import "./Productpage.css"

function Card(props) {
  const { productDetails: { title, price, images, description } } = props
  return (
    <>
      <div className="card">
         <img src={images[0]} alt="product-image" />
         <h4>{title}</h4>
         <p>Rs: {price}</p>
         <p className='description'>{description} </p>
     </div>
    </>
  )
}
export default Card;