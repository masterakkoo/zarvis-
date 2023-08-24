import React from "react";
import "../css/footer.css"
import { Outlet, NavLink } from "react-router-dom";
import { json, useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    const Logout = () => {

        localStorage.removeItem("authToken")
        navigate("/login")


    }
    return (<>

        {/* <!-- Footer --> */}
        <footer class="text-center text-lg-start bg-black text-muted ">
            {/* <!-- Section: Social media --> */}
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mid">
                {/* <!-- Left --> */}
                <div class="me-5 d-none d-lg-block mid">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="" class="me-4 link-secondary">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section class="mid">
                <div class="container text-center text-md-start mt-5 mid">
                    {/* <!-- Grid row --> */}
                    <div class="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3 text-secondary"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 link">
                            {/* <!-- Links --> */}
                            <h6 class="text-uppercase fw-bold mb-4 ">
                                Products
                            </h6>
                            <p>
                                <NavLink to="/">Home</NavLink>
                            </p>
                            <p>
                                <NavLink to="/mobile">Mobile Phones</NavLink>
                            </p>
                            <p>
                                <NavLink to="/audio">Audio products</NavLink>
                            </p>
                            <p>
                                <NavLink to="/products">Smart Watches</NavLink>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        {(localStorage.getItem("authToken")) ?
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 link">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <NavLink to="/cart">Cart</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/orders" className="dropdown-item" >My Orders</NavLink>
                                </p>
                                <p>
                                    <a className="dropdown-item" href="#" onClick={Logout}>Logout</a>
                                </p>
                            </div>
                            : ""}
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3 text-secondary"></i>Kanpur ,Uttar Pradesh ,India</p>
                            <p>
                                <i class="fas fa-envelope me-3 text-secondary"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div class="text-center p-4" >
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">www.Zarvis.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
    </>);
}
export default Footer;