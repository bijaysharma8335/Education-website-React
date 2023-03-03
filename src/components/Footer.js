import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_container">
                <div className="footer_1">
                    <Link
                        to="/"
                        className="footer_logo text-white text-decoration-none"
                    >
                        <h4>Education</h4>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Soluta, ullam.
                    </p>
                </div>

                <div className="footer_2">
                    <h4>Permalinks</h4>
                    <ul className="permalinks">
                        <li>
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses" className="link">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer_3">
                    <h4>Privacy</h4>
                    <ul className="permalinks">
                        <li>
                            <Link to="#" className="link">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="link">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="link">
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer_4">
                    <h4>Contact Us</h4>
                    <div className="permalinks">
                        <p>+91-7619423657</p>
                        <p>bijay@gmail.com</p>
                    </div>
                    <ul className="footer_socials">
                        <li>
                            <Link to="#" className="link">
                                <i className="uil uil-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="link">
                                <i className="uil uil-instagram-alt"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="link">
                                <i className="uil uil-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="link">
                                <i className="uil uil-linkedin-alt"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_copyright">
                <small>Copyright &copy; Bijay</small>
            </div>
        </div>
    );
};

export default Footer;
