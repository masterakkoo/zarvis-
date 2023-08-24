import React from 'react'
import "../css/orderplaced.css"
import Footer from './Footer'
import { json, useNavigate } from "react-router-dom";
function Orderplaced() {
    const navigate = useNavigate();
    return (
        <>
            <section className='order-place' >
                <div className='op-1'>
                    <p>Your Order has been placed.</p>
                    <p>Thank You! for connecting with us</p>
                    <div>
                        <button onClick={() => { navigate("/") }}> {`<<`} GO Back </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Orderplaced