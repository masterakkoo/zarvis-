import React, { useState } from 'react'
import "../css/review.css"
import { useParams } from 'react-router-dom';
import { json, useNavigate } from "react-router-dom";
import rev from "../images/rev.jpg"
import Footer from "./Footer"
function Review() {
    window.scroll(0, 0);
    const navigate = useNavigate();

    const { i1, i2 } = useParams();
    console.log(i1);
    const [review, setreview] = useState({ name: localStorage.getItem("Name"), message: "", range1: 0, range2: 0, range3: 0, range4: 0 });

    const Handle = (e) => {
        // console.log(e);
        const nam = e.target.name;
        const val = e.target.value;
        setreview({ ...review, [nam]: val })
        console.log(review)

        console.log(val)


    }

    const SUBMIT = async () => {
        const res = await fetch("https://react-e-commerce-cm9s.onrender.com/getorder/review",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ _ID: i1, name: review.name, message: review.message, r1: review.range1, r2: review.range2, r3: review.range3, r4: review.range4 }),

            });
        const ans = await res.json();
        setreview({ name: localStorage.getItem("Name"), message: "", range1: 0, range2: 0, range3: 0, range4: 0 });
        console.log(ans);
        if ((ans.success)) {

            window.alert("Your review is submitted successfully.Thanks for giving us review")
            navigate("/orders")
        }
    }
    return (
        <>
            <h4 className='review-heading'>Writng review for {i2}</h4>
            <div className='review-main'>
                <div className='review-right'>
                    <img className='review-img' src={rev} />
                </div>
                <div className='review-f'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Sending Response As</label>
                        <input type="email" class="form-control" id="nam1" placeholder={review.name} value={review.name} onChange={Handle} name='name' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Write Your review...</label>
                        <textarea class="form-control" id="msg" rows="3" value={review.message} onChange={Handle} name='message' />
                    </div>

                    <label for="customRange1" class="form-label">Value for money</label>
                    <input type="range" class="form-range" id="customRange1" min={0} max={10} value={review.range1} name='range1' onChange={Handle} />
                    <label for="customRange1" class="form-label">Comfortable</label>
                    <input type="range" class="form-range" id="customRange1" min={0} max={10} value={review.range2} name='range2' onChange={Handle} />
                    <label for="customRange1" class="form-label">Actual Appearence</label>
                    <input type="range" class="form-range" id="customRange1" min={0} max={10} value={review.range3} name='range3' onChange={Handle} />
                    <label for="customRange1" class="form-label">Quality</label>
                    <input type="range" class="form-range" id="customRange1" min={0} max={10} value={review.range4} name='range4' onChange={Handle} />

                    <input type='submit' onClick={SUBMIT} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Review