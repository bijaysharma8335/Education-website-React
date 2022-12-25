import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <>
            <div className="categories">
                <div className="categories_container">
                    <div className="categories_left">
                        <h1 className="text-white">Categories</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis enim accusantium eius vero, non
                            asperiores. Earum, laudantium odio! Tenetur eveniet
                            maxime officia quas excepturi nostrum ratione eos
                            obcaecati sunt eaque?
                        </p>
                        <Link to="#" className="button text-decoration-none">
                            Learn more
                        </Link>
                    </div>
                    <div className="categories_right">
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;