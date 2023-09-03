import React, { useState, useEffect } from 'react'
import Card from './Card'
import Slider from './Slider';
import Footer from './Footer';
import Dropdown from './Dropdown';
import Loader from './Loader';
const options = ['Brand', 'price', 'discount'];
function AudioProducts(p) {
    window.scroll(0, 0);
    const [mob, setmob] = useState([]);
    const arow = ">";
    const [np, snp] = useState({ display: "block" })
    const [load, setload] = useState({ display: "none" })


    const SORT = async (option) => {
        setload({ display: "block" })
        snp({ display: "none" })

        const res = await fetch("https://react-e-commerce-cm9s.onrender.com/sort",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ category: "Audio Products", basis: option, order: "asc" }),

            }
        );
        const r = await res.json()

        if (r.success) {
            setload({ display: "none" })
            snp({ display: "block" })
        }
        setmob(r.Res);

    }
    useEffect(() => { SORT }, [mob])
    return (
        <>
            <div style={load}><Loader /></div>
            <div style={np}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0px 20px" }}>
                    <h1 className='head-cat'> Audio Products  {arow}</h1>
                    <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
                        <p style={{ display: "flex", margin: "10px" }}>Sort by</p>
                        <Dropdown options={options} onSelect={SORT} />

                    </div>
                </div>

                <div>{(mob.length == 0) ? <div className='cards'>
                    {
                        (p.items != []) ? p.items.map((val) => {
                            if (val.category === "Audio Products")
                                return (
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
                </div> : <div className='cards'>
                    {
                        (mob != []) ? mob.map((val) => {
                            return (
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
                </div>}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AudioProducts;