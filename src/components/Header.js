import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    useEffect(() => {
        const menu = document.querySelector(".nav_menu");
        const menuBtn = document.querySelector("#open-menu-btn");
        const closedBtn = document.querySelector("#close-menu-btn");

        menuBtn.addEventListener("click", () => {
            menu.style.display = "flex";
            closedBtn.style.display = "inline-block";
            menuBtn.style.display = "none";
        });
        //close nav menu
        const closeNav = () => {
            menu.style.display = "none";
            closedBtn.style.display = "none";
            menuBtn.style.display = "inline-block";
        };

        closedBtn?.addEventListener("click", closeNav);
    }, []);

    return (
        <div className="nav">
            <div className="container nav_container ">
                <Link to="/" className="text-white text-decoration-none">
                    <h4>EDUCATION</h4>
                </Link>

                <ul className="nav_menu">
                    <li>
                        <Link to="/" className=" text-decoration-none">
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-decoration-none">
                            <h4>About</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses" className="text-decoration-none">
                            <h4>Courses</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className=" text-decoration-none">
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
