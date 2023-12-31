import React, { useState, useEffect } from 'react'
import Card from './Card'
import Slider from './Slider';
import Footer from "./Footer"
import Dropdown from './Dropdown';
import Loader from './Loader';
const options = ['Brand', 'price', 'discount'];
function Samsung(p) {
    const [it, setit] = useState([]);
    const [mob, setmob] = useState([]);
    const [np, snp] = useState({ display: "none" })
    const [load, setload] = useState({ display: "block" })

    const arow = ">";


    const Load = async () => {
        console.log("eer");
        const res = await fetch("http://localhost:4000/category",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ category: "Mobile" }),

            }
        );
        const r = await res.json()
        if (r.success) {
            console.log(r.ans);
            setmob(r.ans)
            setload({ display: "none" })
            snp({ display: "block" })
        }
    }
    const SORT = async (option) => {
        setload({ display: "block" })
        snp({ display: "none" })
        console.log(option)
        const res = await fetch("http://localhost:4000/sort",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ category: "Mobile", basis: option, order: "asc" }),

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
    useEffect(() => {
        Load();
    }, [it])
    return (
        <>
            <div style={load}><Loader /></div>
            <div style={np}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0px 20px" }}>
                    <h1 className='head-cat'> Smartphones  {arow}</h1>
                    <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
                        <p style={{ display: "flex", margin: "10px" }}>Sort by</p>
                        <Dropdown options={options} onSelect={SORT} />

                    </div>
                </div>
                <div>
                    {(mob.length == 0) ? <div className='cards'>
                        {/* {
                        (p.items != []) ? p.items.map((val) => {
                            if (val.category === "Mobile")
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

                    } */}
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

export default Samsung