import React, { useState, useEffect, useContext } from 'react'
import "../css/product.css"
import Slider1 from "../compnents/Slider1"
import { product, setproduct, add, setadd } from "./Usacontextreducer"
import Card from './Card';
import { json, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer"
import Loader from './Loader';
import Seview from './Seview';
import { toast } from 'react-toastify';
function Product(props) {
    const _id = useParams();

    const [np, snp] = useState({ display: "none" })
    const [load, setload] = useState({ display: "block" })
    const [foot, setfoot] = useState(-1);
    const [data, setdata] = useState({
        id: '', category: '', company: '', model_name: '', discount: 0, discription: "", images: [],
        options
            : [{ varient: "", price: 0 }, { varient: "", price: '' }],
        review:
            []
    });
    const CALL = async () => {
        const res = await fetch("http://localhost:4000/product",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ _id: _id }),

            });
        const re = await res.json();
        if (re.success) {

            snp({
                display: "block"
            })
            setload({ display: "none" })
            // setfoot(data.options[1].price);
            console.log(foot)
            setdata(re.Res[0])
            // console.log(rev)
        }

        // console.log(re.Res[0])

        // console.log(data.images)
    }
    // console.log(_id);
    window.scrollTo(0, 0);
    let setaddress = setadd();
    let setpro = setproduct();
    const navigate = useNavigate();
    const add1 = add()

    // const data = JSON.parse(localStorage.getItem("data1"))


    let r = {};
    const f = "dvdfvbdf ";
    // console.log(data)



    const BUY = async () => {
        // const data = JSON.parse(localStorage.getItem("data1"));
        // console.log(f);
        let p = Math.floor(((100 - data.discount) / 100) * foot)
        localStorage.setItem("foot", p);
        if (foot == -1)
            return toast("select one of the varients.");
        if (localStorage.getItem("authToken")) {
            const res = await fetch("http://localhost:4000/getaddress", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: localStorage.getItem("email")
                })
            })
            r = await res.json()
            // console.log(r)
            // console.log(r.Res[0])
            if (r.Res[0].address !== "") {
                navigate("/soaddress")
            }
            else {
                navigate("/address")
            }

        }
        else {
            navigate("/login")
        }

        setaddress({ address: r.Res[0].address, state: r.Res[0].state, city: r.Res[0].city, no: r.Res[0].mobile_no, ano: r.Res[0].alternate_no })


        // console.log(add1.address)




    }
    useEffect(() => {
        CALL();
    }, [])
    return (
        <>
            <div style={load}>
                <Loader />
            </div>
            <section className='product' style={np}>
                <div className='pro-intro'>
                    <div className='pro-abt'>
                        <h1>{data.company} | {data.model_name}</h1>
                        <p>Model : {data.model_name}</p>
                        <p>Brand: {data.company}</p>

                        <div className='varient'>
                            <div className='sub-varient' onClick={() => setfoot(data.options[0].price)}>
                                <p> {data.options[0].varient}</p>
                                <p>₹{data.options[0].price}</p>

                            </div>
                            <div className='sub-varient' onClick={() => setfoot(data.options[1].price)}>

                                <p>{data.options[1].varient}</p>
                                <p>₹{data.options[1].price}</p>


                            </div>

                        </div>
                        {(data.availibilty == true) ? <p style={{ fontSize: "2rem", color: "brown", marginTop: "10px" }}>Only few in stock! order fast</p> : <p style={{ fontSize: "2rem", color: "brown", marginTop: "10px" }} >currently out of stocks</p>

                        }
                    </div>

                    <div className='pro-img' >
                        <Slider1
                            images={data.images}
                        />
                    </div>
                </div>
                <div className='pro-details'>
                    <h1>Details</h1>
                    <p> {data.discription}
                    </p>
                </div>
                <div className='pro-bimg'>
                    <img src={data.images[3]} />
                    <img src={data.images[4]} />
                </div>
                <hr style={{ backgroundColor: "black" }} />
                <div style={np}>
                    {
                        (data.review != []) ? data.review.map((val, i) => {
                            return (
                                <Seview
                                    review={val}

                                />
                            );
                        }) : <p>asdf</p>
                    }

                </div>


            </section>
            <div className='pro-fix'>
                {
                    (foot === -1) ? <p style={{ color: "white" }}> Select one of the varient</p> : <div className='pro-fix-left' style={{ fontSize: "1.3rem" }}><strike>₹{foot} &nbsp;&nbsp;</strike>&nbsp;&nbsp; {data.discount}% off <span>&nbsp;&nbsp;</span> ₹{((100 - data.discount) / 100) * foot}</div>

                }


                {/* <div className='pro-fix-left' style={{ fontSize: "1.3rem" }}><strike>₹{foot} &nbsp;&nbsp;</strike>&nbsp;&nbsp; {data.discount}% off <span>&nbsp;&nbsp;</span> ₹{((100 - data.discount) / 100) * foot}</div> */}
                <div className='pro-fix-right'>
                    <button onClick={BUY}>BUY</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product