import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const menuBtnRef = useRef();
    const closeBtnRef = useRef();

    const [hide, setHide] = useState(true);

    const menuBtn = document.querySelector("#open-menu-btn");
    const closedBtn = document.querySelector("#close-menu-btn");

    function handleResize() {
        if (window.innerWidth >= 1024) {
            setHide(true);
            menuBtnRef.current.style.display = "none";
            closeBtnRef.current.style.display = "none";
            return true;
        } else if (
            window.innerWidth < 1024 &&
            closeBtnRef.current.style.display === "none"
        ) {
            setHide(false);
            for (let i = 0; i <= 5; i++) {
                menuBtnRef.current.style.display = "inline-block";
            }
            return false;
        } else if (
            window.innerWidth < 1024 &&
            menuBtnRef.current.style.display === "none"
        ) {
            setHide(false);
            closeBtnRef.current.style.display = "inline-block";
            return false;
        }
    }
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setHide(false);
        } else if (window.innerWidth > 1024) {
            closeBtnRef.current.style.display = "none";
            menuBtnRef.current.style.display = "none";
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        const closeNav = (e) => {
            closedBtn.style.display = "none";
            e.stopPropagation();
            setHide(false);

            menuBtn.style.display = "inline-block";
        };
        const showNav = (e) => {
            e.stopPropagation();
            setHide(true);
            closedBtn.style.display = "inline-block";
            menuBtn.style.display = "none";
        };

        closedBtn?.addEventListener("click", closeNav);
        menuBtn?.addEventListener("click", showNav);
    }, [closedBtn, menuBtn]);

    return (
        <div className="nav">
            <div className="container nav_container ">
                <Link to="/" className="text-white text-decoration-none">
                    <h4>EDUCATION</h4>
                </Link>

                {hide && (
                    <ul className="nav_menu" onClick={handleResize}>
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
                )}

                <button
                    id="open-menu-btn"
                    ref={menuBtnRef}
                    style={
                        hide ? { display: "none" } : { display: "inline-block" }
                    }
                >
                    <i className="uil uil-bars"></i>
                </button>
                <button
                    id="close-menu-btn"
                    ref={closeBtnRef}
                    style={hide ? { display: "block" } : { display: "none" }}
                >
                    <i className="uil uil-multiply"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;
