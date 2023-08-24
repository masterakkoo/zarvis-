import React, { useState } from 'react'
import { json, useNavigate } from "react-router-dom";
import "../css/login.css"
const reg = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg";
import { Outlet, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
function Login() {
    const [details, setdetails] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const Onchange = (e) => {
        const nam = e.target.name;
        const val = e.target.value;
        setdetails({ ...details, [nam]: val })
        console.log(details)
    }
    const Submit = async (e) => {
        e.preventDefault();
        console.log(details)
        // navigate("/");
        const { email, password } = details;
        const res = await fetch("http://localhost:4000/login1", {




            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const json = await res.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            console.log(localStorage.getItem("authToken"))
            // console.log(json.Name)
            localStorage.setItem("Name", json.Name)
            console.log(json.email)
            localStorage.setItem("email", json.email)
            navigate("/")
        }
        else {
            // window.alert("Incorrect Details")
            return toast("incorrect credentials!")
        }
    }
    return (
        <>

            <div className='contact1'>
                <div className='left-cont1'>


                    <img src={reg} />

                </div>
                <div className='right-cont1'>
                    <h1>Log IN</h1>
                    <form className='form1' >

                        <div className='email'><label htmlFor="email">Email ID:</label>
                            <input type="email" name="email" id="email" placeholder='Email' onChange={Onchange} value={details.email} /></div>
                        <div className='password'><label htmlFor="password">password:</label>
                            <input type='password' name="password" placeholder='password' onChange={Onchange} value={details.password}></input></div>

                        <div className='submit1'>
                            <input type="submit" value="Submit" onClick={Submit} />
                            <li>
                                <NavLink to="/registration">I'm a New User</NavLink>

                            </li>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Login