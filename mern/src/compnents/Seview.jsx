import React from 'react'
import "../css/review.css"
import rate from "../images/rate.png"
import rate1 from "../images/rate1.png"
function Seview(p) {

    var a1 = [];
    var a2 = [];
    var a3 = [];
    var a4 = [];

    const review = p.review;
    const r1 = review.r1 / 2;
    const r2 = review.r2 / 2;
    const r3 = review.r3 / 2;
    const r4 = review.r4 / 2;
    for (let i = 0; i < 5; i++) {
        if (i < r1)
            a1[i] = 1;
        else
            a1[i] = 0;
    }
    for (let i = 0; i < 5; i++) {
        if (i < r1)
            a2[i] = 1;
        else
            a2[i] = 0;
    }
    for (let i = 0; i < 5; i++) {
        if (i < r1)
            a3[i] = 1;
        else
            a3[i] = 0;
    }
    for (let i = 0; i < 5; i++) {
        if (i < r1)
            a4[i] = 1;
        else
            a4[i] = 0;
    }
    return (
        <>
            <div className='main-rev'>
                <div className='review-pro'>
                    <div className="review-p">{review.name[0]}</div>
                    <div className='review-name'>{review.name}</div>
                </div>
                <div className='review-msg'>
                    {review.message}
                </div>
                <div className='review-rate'>
                    <div className='rev-1'>
                        Comfortable :
                        {
                            a1.map((val, i) => {
                                if (val == 1) return (
                                    <div><img src={rate} /></div>
                                );
                                else
                                    return (<div><img src={rate1} /></div>)
                            })

                        }
                    </div>
                    <div className='rev-1'>
                        Value to money:
                        {
                            a2.map((val, i) => {
                                if (val == 1) return (
                                    <div><img src={rate} /></div>
                                );
                                else
                                    return (<div><img src={rate1} /></div>)

                            })

                        }
                    </div>
                    <div className='rev-1'>
                        Actual Appearence:
                        {
                            a3.map((val, i) => {
                                if (val == 1) return (
                                    <div><img src={rate} /></div>
                                );
                                else
                                    return (<div><img src={rate1} /></div>)
                            })

                        }
                    </div>
                    <div className='rev-1'>
                        Sustainbilty:
                        {
                            a4.map((val, i) => {
                                if (val == 1) return (
                                    <div><img src={rate} /></div>
                                );
                                else
                                    return (<div><img src={rate1} /></div>)
                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seview