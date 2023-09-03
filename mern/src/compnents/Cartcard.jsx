import React, { useEffect } from 'react'
import "../css/cartcard.css"
import { json, useNavigate } from "react-router-dom";
import { product, setproduct, add, setadd } from "./Usacontextreducer"
import { toast } from 'react-toastify';
function Cartcard(po) {
    const items = product();
    const setitems = setproduct();
    const p = po.data;
    // console.log(p);
    const value = po.index;
    const navigate = useNavigate();
    // console.log(po.index)
    // console.log(p.id)
    const ppp = async () => {

        navigate(`/product/${p.id}`)
        localStorage.setItem('data1', JSON.stringify({ ...p, name: p.model_name }))


    }
    const Remove = async () => {
        try {
            const res = await fetch("http://localhost:4000/removecart",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ id: p._id })
                }
            );
            const ans = await res.json()
            // navigate("/cart")
            var item = [...items];

            item.splice(value, 1);

            setitems(item)
            // console.log(items)

            if (ans.success == true)
                return toast("Item removed from the cart!")
            return;


        }
        catch (err) { console.log(err) }
        // location.reload();
    }
    // useEffect(Remove(),[])
    return (

        <>

            <div className='cart-card ' >
                <div className='cart-card-up abc' onClick={ppp} >
                    <img src={p.images[0]} />
                </div>
                <div className='cart-card-down'>
                    <h2 className='abc' onClick={ppp}>
                        {p.model_name}
                    </h2>
                    <p className='abc' onClick={ppp}>price : ₹{p.options[0].price}</p>

                    <div className='varient abc' onClick={ppp}>
                        <p>{p.options[0].varient}</p>
                    </div>
                    <div className='cart-card-btns'>
                        <button className='cart-card-btn' onClick={Remove} >Remove from cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cartcard