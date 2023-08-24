import React, { useState, useEffect } from 'react'
import "../css/home.css"
import Card from './Card';
import Slider from './Slider';
import Footer from './Footer';
import { filter2, setfilter2 } from "./Usacontextreducer"
import { json, useNavigate } from "react-router-dom";
import Loader from "./Loader"
import Seview from './Seview';
function Home(p) {
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    const filter = filter2();
    const setfilter = setfilter2();
    const item = p.items;
    // console.log(item)
    const SF = (i) => {
        setfilter(i);
        const f1 = i[0];
        const f2 = i[1];

        navigate(`/show-filter/${f1}/${f2}`)
    }

    const arow = ">";

    return (
        <>
            <Slider />
            <div className='home-1'>
                <div className='left-view'>
                    <h3>Smartphones</h3>
                    <button onClick={() => { SF(["Mobile", "Samsung"]) }}>SAMSUNG</button>
                    <button onClick={() => { SF(["Mobile", "Apple"]) }}>iphone</button>
                    <button onClick={() => { SF(["Mobile", "Oneplus"]) }}>Oneplus</button>

                    <h3>Smartwatches</h3>
                    <button onClick={() => { SF(["Smart Watch", "Boat"]) }}>Boat</button>
                    <button onClick={() => { SF(["Smart Watch", "Apple"]) }}>Apple</button>
                    {/* <button onClick={()=>{SF(["Smart Watch","Samsung"])}}>Samsung</button> */}

                    <h3>headphones</h3>
                    <button onClick={() => { SF(["Audio Products", "Boat"]) }}>Boat</button>
                    <button onClick={() => { SF(["Audio Products", "Sony"]) }}>Sony</button>
                    {/* <button onClick={()=>{SF(["Audio Products","Samsung"])}}>Oneplus</button> */}

                </div>
                <div className='right-view'>
                    {/* <div className='dev1'>
                        <button>Sort by</button>
                        <button>Fbuttonter</button>
                    </div> */}
                    <div className='dev2'>
                        <h2>Our Trending  {arow} </h2>
                        <div className='trending'>
                            <div className='cards'>
                                {
                                    (item != []) ? item.map((val, i) => {
                                        if (i % 3 == 0 && i < 10) return (
                                            <Card
                                                id={val._id}
                                                company={val.company}
                                                name={val.model_name}
                                                images={val.images}
                                                options={val.options}
                                                price={val.price}
                                                discount={val.discount}
                                                availibilty={val.availibilty}
                                                discription={val.discription}
                                                cartbtn={true}
                                            />
                                        );
                                    }) : <p>asdf</p>

                                }
                            </div>
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <h2>Our Bestsellers    {arow}</h2>
                        <div className='bestseller'>
                            <div className='cards'>
                                {
                                    (item != []) ? item.map((val, i) => {
                                        if (i % 2 == 0 && i > 0 && i < 9) return (
                                            <Card
                                                id={val._id}
                                                name={val.model_name}
                                                company={val.company}
                                                images={val.images}
                                                options={val.options}
                                                price={val.price}
                                                discount={val.discount}
                                                discription={val.discription}
                                                cartbtn={true}
                                            />
                                        );
                                    }) : <p>asdf</p>

                                }
                            </div>
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <h2>Old-n-glod   {arow}</h2>
                        <div className='old'>
                            <div className='cards'>
                                {
                                    (item != []) ? item.map((val, i) => {
                                        if (i < 4) return (
                                            <Card
                                                id={val._id}
                                                name={val.model_name}
                                                company={val.company}
                                                images={val.images}
                                                options={val.options}
                                                price={val.price}
                                                discount={val.discount}
                                                discription={val.discription}
                                                cartbtn={true}
                                            />
                                        );
                                    }) : <p>asdf</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader /> */}
            <Footer />

        </>
    )
}

export default Home