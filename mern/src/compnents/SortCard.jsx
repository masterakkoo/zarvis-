import React, { createContext, useContext, useState, useEffect } from 'react'
import "../css/card.css"
const iu = "https://stg-images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863401";
import { product, setproduct } from "./Usacontextreducer"
import { json, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function Sortcard(p) {


    const navigate = useNavigate();

    // console.log(p);
    // let setprod = setproduct();
    const Cartadd = async () => {
        if (localStorage.getItem("authToken")) {
            const res = await fetch("https://react-e-commerce-cm9s.onrender.com/setcart", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: localStorage.getItem("email"), ...p, svarient: p.options.varient, sprice: p.options.price, model_name: p.name

                })
            })
            const json = await res.json()
            if (json.success) {
                return toast("Added To your cart!");
                // console.log("data is posted")
            }
        }
        else {
            navigate("/login")
        }
    }
    const ppp = async () => {

        navigate(`/product/${p.id}`)
        localStorage.setItem('data1', JSON.stringify(p))


    }
    const priced = ((100 - p.discount) * p.options.price) / 100;

    return (
        <>

            <div className='card ' >
                <div className='card-up abc' onClick={ppp} >
                    <img src={p.images[0]} />
                </div>
                <div className='card-down'>
                    <h2 className='abc'>
                        {p.name}
                    </h2>
                    <p className='abc'>price : <strike>₹{p.options.price}</strike> <span></span><span style={{ fontSize: '12px' }}>{p.discount}% off </span>₹{priced} </p>
                    {/* <p>discount : 30%</p> */}

                    <div className='varient abc'>
                        <p>{p.options.varient}</p>

                    </div>
                    <div className={(p.cartbtn) ? 'card-btns' : 'card-nbtn'}>
                        {/* <button className='card-btn'>Buy</button> */}
                        <button className='card-btn' onClick={Cartadd}>Add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sortcard;
