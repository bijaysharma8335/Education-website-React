import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav">
            <div className="container nav_container ">
                <Link to="/" className="text-white text-decoration-none">
                    <h4>EDUCATION</h4>
                </Link>
                <ul className="nav_menu">
                    <li>
                        <Link
                            to="/"
                            className=" text-decoration-none"
                        >
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className=" text-decoration-none"
                        >
                            <h4>About</h4>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            className="text-decoration-none"
                        >
                            <h4>Courses</h4>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className=" text-decoration-none"
                        >
                            <h4>Contact</h4>
                        </Link>
                    </li>
                </ul>
                <button id="open-menu-btn">
                    <i className="uil uil-bars"></i>
                </button>
                <button id="close-menu-btn">
                    <i className="uil uil-multiply"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;
