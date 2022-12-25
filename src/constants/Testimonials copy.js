import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";
// import { testimonials } from "../constants/testimonials"
const Testimonials = () => {
    return (
        <div className="container testimonials_container swiper mySwiper">
            <h2 className="testimonial_title">Students Testimonials</h2>
            <div className="swiper-wrapper">
                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24WWpVB9X7t5-QZ8uFCH3QY65_-mO0f4M218TzwbU2WPJaG_kElCLJdK4LP_gNd-Vj0U&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <div className="testimonial_info">
                        <h5>Diana Griande</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat harum et facilis excepturi enim beatae
                            aliquam magnam. Voluptatum, consequatur commodi!
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNQe8-_98Kduejtw2FPiUzO49TPjtiQAkgLCd_qoo4kXwhr8Xr8-a6r5FGz9Xq2aeTbc&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <div className="testimonial_info">
                        <h5>Ariana Griande</h5>
                        <small>WordPress Developer</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat harum et facilis excepturi enim beatae
                            aliquam magnam. Voluptatum, consequatur commodi!
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img
                            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                        />
                    </div>
                    <div className="testimonial_info">
                        <h5>Shakira</h5>
                        <small>Android Developer</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat harum et facilis excepturi enim beatae
                            aliquam magnam. Voluptatum, consequatur commodi!
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img
                            src="https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYW50aWMlMjBjb3VwbGV8ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                        />
                    </div>
                    <div className="testimonial_info">
                        <h5>John Maharjan</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat harum et facilis excepturi enim beatae
                            aliquam magnam. Voluptatum, consequatur commodi!
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img
                            src="https://ak.picdn.net/offset/photos/5ee2b170a75ca0db37095744/medium/photo.jpg"
                            alt=""
                        />
                    </div>
                    <div className="testimonial_info">
                        <h5>Anish</h5>
                        <small>Backend Developer</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat harum et facilis excepturi enim beatae
                            aliquam magnam. Voluptatum, consequatur commodi!
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img
                            src="https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg"
                            alt=""
                        />
                    </div>
                    <div className="testimonial_info">
                        <h5>Jennifer Lopez</h5>
                        <small>BlockChain Developer</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat harum et facilis excepturi enim beatae
                            aliquam magnam. Voluptatum, consequatur commodi!
                        </p>
                    </div>
                </article>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Testimonials;
