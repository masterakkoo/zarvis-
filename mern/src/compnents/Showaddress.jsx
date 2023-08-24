import React, { useEffect } from 'react'
import "../css/showaddress.css"
import { product, setproduct, add, setadd } from "./Usacontextreducer"
import { json, useNavigate } from "react-router-dom";
import Footer from './Footer';
import Orderplaced from './Orderplaced';
function Showaddress() {
    const data = JSON.parse(localStorage.getItem("data1"))
    const addres = add();
    let setaddress = setadd();
    // console.log(address);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time)
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve(true);
            }

            script.onerror = () => {
                resolve(false);
            }

            document.body.appendChild(script);
        })
    }
    const checkout = async () => {

        const scri = "https://checkout.razorpay.com/v1/checkout.js";

        const res = await loadScript(scri);
        console.log(res)
        if (!res)
            alert("you are offline....")

        const pro_price = 100 * localStorage.getItem("foot");
        const Order = async () => {
            const res = await fetch("http://localhost:4000/order", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: localStorage.getItem("email"), name: data.name, model_id: data.id, model_name: data.name, price: localStorage.getItem("foot"), image: data.images[0],
                    Date: date, time: time
                })

            })
            const r = await res.json()
            if (r.success == true) {
                navigate("/orderplaced")
            }
        }
        var options = {
            "key": 'rzp_test_4bGLawm7Av2D37', // Enter the Key ID generated from the Dashboard
            "amount": pro_price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Zarvis Essentials", //your business name
            "description": "Make your payment",
            "image": "https://w7.pngwing.com/pngs/571/686/png-transparent-jarvis-logo-edwin-jarvis-iron-man-youtube-marvel-cinematic-universe-male-jarvis-ui-comics-superhero-computer-thumbnail.png",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "" //Provide the customer's phone number for better conversion rates 
            },
            handler: function (response) {
                Order();
            }

        };

        const payment = new window.Razorpay(options);
        payment.open();
    }

    const B = async () => {
        const res = await fetch("http://localhost:4000/getaddress", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: localStorage.getItem("email")
            })
        })
        const r = await res.json()
        console.log(r)
        console.log(r.Res[0].address)
        setaddress({ address: r.Res[0].address, state: r.Res[0].state, city: r.Res[0].city, no: r.Res[0].mobile_no, ano: r.Res[0].alternate_no })
    }
    useEffect(() => {
        B();
    }, []);
    return (
        <>
            <div className='add'>
                <div className='sadd'>
                    <p>{`${addres.address}  ${addres.city} ${addres.state} `}</p>
                    <p>Mobile No. : {addres.no}</p>
                    <p>Alternate Mobile No. : {addres.ano}</p>
                    <div>
                        <button onClick={checkout}>Checkout</button>
                        <button onClick={() => navigate("/address")}>Change Addres</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Showaddress