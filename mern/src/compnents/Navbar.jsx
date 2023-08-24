import React, { useState, useEffect } from 'react'
import "../css/navbar.css"
import logo from "../images/logo.png"
import { Outlet, NavLink } from "react-router-dom";
import { json, useNavigate } from "react-router-dom";
import { product, setproduct, s, sset } from "./Usacontextreducer"
import se from "../images/search-icon.png"
function Navbar() {
    const navigate = useNavigate()
    const search = s();
    const ssearch = sset();
    const [ses, seset] = useState("");
    // console.log(localStorage.getItem("authToken"))
    // console.log(localStorage.getItem("email"))
    const Logout = () => {

        localStorage.removeItem("authToken")
        navigate("/login")


    }
    const d = {
        backgroundColor: "aliceblue",
        color: "black"
    };
    const CHANGE = (e) => {

        const nam = e.target.name;
        const val = e.target.value;
        seset(val);
        // console.log(ses)
    }
    const SEARCH = (e) => {
        e.preventDefault();
        console.log(ses)
        seset("");
        ssearch(ses);
        if (ses == "")
            navigate("/")
        if (ses != "")
            navigate(`/search-item/${ses}`)

        // console.log(search)
    }
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-light  navbar1">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Navbar brand --> */}
                        <img src={logo} />
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li  >
                                <NavLink to="/">Home</NavLink>

                            </li >
                            <li className='active'  >
                                <NavLink to="/mobile">Mobile Phones</NavLink>
                            </li >
                            <li>
                                <NavLink to="/audio">Audio products</NavLink>
                            </li>
                            <li  >
                                <NavLink to="/products">Smart Watches</NavLink>
                            </li>
                            {(!localStorage.getItem("authToken")) ?
                                <li  >
                                    <NavLink to="/registration">Register</NavLink>
                                </li>
                                : ""}

                            {(!localStorage.getItem("authToken")) ? <li>
                                <NavLink to="/login">Log In</NavLink>
                            </li> : ""
                            }
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">

                        <div class=" search">
                            <div class="search-bar">
                                <form>
                                    <input type="search" id="form1" class="form-control" name='search' placeholder='search' value={ses} onChange={CHANGE} />
                                </form>
                            </div>
                            <button type="button" class="btn btn-white" onClick={SEARCH}>
                                <img src={se} />
                            </button>
                        </div>

                        {(!localStorage.getItem("authToken")) ? "" :
                            <li className='cart-btn' >
                                <NavLink to="/cart"> <i className="fas fa-shopping-cart"></i></NavLink>
                            </li>
                        }

                        {/* <!-- Notifications --> */}

                        {/* <!-- Avatar --> */}
                        {(!localStorage.getItem("authToken")) ? "" :
                            <div className="dropdown">
                                <a
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle"
                                        height="25"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">{localStorage.getItem("Name")}</a>
                                    </li>
                                    <li >
                                        <NavLink to="/orders" className="dropdown-item" >My Orders</NavLink>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="#" onClick={Logout}>Logout</a>
                                    </li>
                                </ul>
                            </div>}
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    )
}

export default Navbar;