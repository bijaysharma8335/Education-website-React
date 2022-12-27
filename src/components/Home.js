import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Category from "./Category";
import Courses from "./Courses";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import image from ".././assets/images/header.svg";

const Home = () => {
    return (
        <Container>
            <div className="header">
                <div className="header_container">
                    <div className="header_left">
                        <h1>Grow your skills to advance your career growth</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae reprehenderit quod adipisci qui
                        </p>
                        <Link
                            to="/courses"
                            className="button button-primary text-decoration-none"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className="header_right-image">
                        <div className="header_right">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Category />
            <Courses number={6}/>
            <Faq />
            <Testimonials />
        </Container>
    );
};

export default Home;
