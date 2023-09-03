import React, { useEffect } from 'react'
import "../css/contact.css"
// import Footer from "../components/Footer"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { json, useNavigate } from "react-router-dom";


const reg = "https://www.leadquizzes.com/wp-content/uploads/2019/06/New-blog-graphic-16.jpg";


function Contacts() {
    const navigate = useNavigate();
    const [user, setuser] = useState({ fname: "", lname: "", email: "", password: "", con_password: "" });

    const Handle = (e) => {
        console.log(e);
        const nam = e.target.name;
        const val = e.target.value;
        setuser({ ...user, [nam]: val })
        console.log(user)

    }
    const SUBMIT = async (e) => {
        console.log(e)
        e.preventDefault();
        console.log(user)
        const { fname, lname, email, password, con_password } = user;
        if (password === con_password) {
            const res = await fetch("https://react-e-commerce-cm9s.onrender.com/register1", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ fname, lname, email, password, con_password })
            })
            const rest = await res.json()
            console.log(rest)
            if (rest.found == true && rest.success == true)
                window.alert("uesr already present in our database")
            else if (rest.create == true) {
                window.alert("succesfull")
                setuser({ fname: "", lname: "", email: "", password: "", con_password: "" });
                navigate("/login")
            }
            else {
                window.alert("some problem occured try again after some time")
            }




        }
        else {
            setuser({ ...user, password: "", con_password: "" });
            window.alert("passwords are not matching")
        }

    }

    return (
        <>
            <div className='contact'>
                <div className='left-cont'>


                    <img src={reg} />

                </div>
                <div className='right-cont'>
                    <h1>User Registration</h1>
                    <form  >
                        <div className='name'>
                            <label htmlfor="fname">Full Name:</label>
                            <input type="text" id="fname" name="fname" placeholder='fast name' value={user.fname} onChange={Handle} />
                            <input type="text" id="lname" name="lname" placeholder='last name' value={user.lname} onChange={Handle} />
                        </div>
                        <div className='email'><label htmlfor="email">Email ID:</label>
                            <input type="email" name="email" id="email" placeholder='Email' onChange={Handle} value={user.email} /></div>
                        <div className='password'><label htmlfor="password">password:</label>
                            <input type='password' name="password" placeholder='password' onChange={Handle} value={user.password}></input></div>
                        <div className='password'><label htmlfor="password">C password:</label>
                            <input type='password' name="con_password" placeholder='confirm password' onChange={Handle} value={user.con_password}></input></div>


                        <div className='submit'>
                            <input type="submit" value="Submit" onClick={SUBMIT} />
                            <li><NavLink to="/login">Already a User?</NavLink></li>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Contacts;