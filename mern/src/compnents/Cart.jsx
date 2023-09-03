import React, { useState, useEffect } from 'react'
import "../css/cart.css"
import Cartcard from './Cartcard'
import { product, setproduct, add, setadd } from "./Usacontextreducer"
import Loader from './Loader'
function Cart() {
    const items = product();
    const setitems = setproduct();
    const [np, snp] = useState({ display: "none" })
    const [load, setload] = useState({ display: "block" })
    const [foot, setfoot] = useState(0);
    console.log(localStorage.getItem("email"))
    const cart = async () => {
        try {
            const res = await fetch("http://localhost:4000/getcart",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email: localStorage.getItem("email") })
                }
            );
            const ans = await res.json()
            if (ans.success) {
                setload({ display: "none" })
                snp({ display: "block" })
            } setitems(ans.cartitem)
            items.map((val, i) => {
                // console.log(val.options[0].price);
                setfoot(foot + val.options[0].price);
            })
        }
        catch (err) { console.log(err) }

    }
    // cart();
    useEffect(() => {
        cart();
    }, [])
    return (
        <>
            <div style={load}><Loader /></div>
            <div style={np}>
                <div className='cart-container'>
                    <div className='cart-left-view'>
                        <h3>Smartphones</h3>
                        <li>Samsung</li>
                        <li>iphone</li>
                        <li>Oneplus</li>
                        <li>Realme</li>
                        <h3>Smartwatches</h3>
                        <li>Samsung</li>
                        <li>iphone</li>
                        <li>Oneplus</li>
                        <li>Realme</li>
                        <h3>headphones</h3>
                        <li>Samsung</li>
                        <li>iphone</li>
                        <li>Oneplus</li>
                        <li>Realme</li>
                    </div>
                    <div className='cart-right-view'>
                        <h1>Cart Items</h1>
                        <div className='cart-item'>
                            {
                                (items != []) ? items.map((val, i) => {
                                    return (
                                        <Cartcard
                                            data={val}
                                            index={i}
                                        />
                                    );
                                }) : <p>asdf</p>

                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Cart