import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image } from "react-bootstrap";
import Category from "./Category";

import Faq from "./Faq";
import Testimonials from "./Testimonials";

import { courses } from "./../constants/courses";
const handleDragStart = (e) => e.preventDefault();
const items = [
    <img
        src="https://www.orfonline.org/wp-content/uploads/2020/12/Education-1280x720.jpg"
        onDragStart={handleDragStart}
        width={100}
        height={600}
        alt=""
        role="presentation"
    />,
    <img
        src="https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2019/10/Education-1.jpg"
        onDragStart={handleDragStart}
        width={100}
        height={600}
        role="presentation"
        alt=""
    />,
    <img
        src="https://img.lovepik.com/photo/50089/0761.jpg_wh860.jpg"
        onDragStart={handleDragStart}
        width={100}
        height={600}
        role="presentation"
        alt=""
    />,
];
const Home = () => {
    return (
        <>
            <AliceCarousel
                mouseTracking
                autoPlay
                items={items}
                infinite
                animationType="fadeout"
                disableDotsControls
                controlsStrategy="alternate"
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                touchTracking={false}
                disableButtonsControls
                className="mt-5"
            />
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
                    {/* <div className="header_right-image">
                        <div className="header_right">
                            <img
                                src="https://img.freepik.com/premium-vector/education-technology-page-smartphone-page_316839-2330.jpg?w=2000"
                                alt=""
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            <Category />
            <h2 className="text-center my-5"> Our Popular Courses</h2>
            <div className="container courses_container mt-2">
                {courses.map((course, i) => {
                    if (i < 3) {
                        return (
                            <div className="course" key={i}>
                                <img
                                    fluid={true}
                                    src={course.image}
                                    alt=""
                                    height={200}
                                    style={{ objectFit: "contain !important" }}
                                />

                                <div className="course_info">
                                    <h4>{course.title}</h4>
                                    <p>{course.description}</p>
                                    <Link
                                        to="/courses"
                                        state={{ course }}
                                        className="button button-primary text-decoration-none"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <Faq />
            <Testimonials />
            </Container>
        </>
    );
};

export default Home;
