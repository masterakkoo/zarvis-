import React from 'react'
import "../css/ordercard.css"
import { json, useNavigate } from "react-router-dom";
function OrderCard(p) {
  const navigate = useNavigate();
  console.log(p)
  const REVIEW = () => {
    navigate(`/review/${p._id}/${p.name}`)

  }

  return (
    <>
      <div className='o-card'>
        <div className='o-up'>
          <img src={p.image} />
          <div className='o-details'>
            <p>{p.name}</p>
            <p>₹{p.price}</p>
            <p>{p.date}&nbsp; {p.time}</p>
          </div>
        </div>
        <div className='o-down'>
          <p className='review' onClick={REVIEW}>Write your review....</p>
          <p>ORDER PLACED</p>
        </div>
      </div>
    </>
  )
}

export default OrderCard