import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import image from "../assets/images/contact.svg";
const Contact = () => {
    return (
        <div className="contact">
            <div className="container contact_container">
                <aside className="contact_aside">
                    <div className="aside_image">
                        <img src={image} alt="" />
                    </div>
                    <h2 className="text-white">Contact Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cumque asperiores
                    </p>
                    <ul className="contact_details">
                        <li>
                            <i className="uil uil-phone-times"></i>
                            <h5>+234567890</h5>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <h5>support@gmail.com</h5>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <h5>Rome,Italy</h5>
                        </li>
                    </ul>
                    <ul className="contact_socials">
                        <li>
                            <Link to="/">
                                <i className="uil uil-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="uil uil-instagram-alt"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="uil uil-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="uil uil-linkedin-alt"></i>
                            </Link>
                        </li>
                    </ul>
                </aside>

                <form
                    action="https://formspree.io/f/xjvzqnow"
                    className="contact_form"
                    method="POST"
                >
                    <div className="form_name">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="First Name"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="Last Name"
                            required
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Your Email Address"
                        name="Email Address"
                        required
                    />
                    <textarea
                        rows="5"
                        name="Message"
                        placeholder="Message"
                        required
                    ></textarea>
                    <button type="submit" className="button button-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
