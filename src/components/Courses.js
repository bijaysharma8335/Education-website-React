import React from "react";
import { Link } from "react-router-dom";
import { courses } from "./../constants/courses";

const Courses = () => {
    return (
        <div className="courses ">
            <h2 className="text-white mt-5"> Our Popular Courses</h2>
            <div className="container courses_container">
                {courses.map((course, i) => (
                    <div className="course" key={i}>
                        <img src={course.image} alt=""
                        height={200} />

                        <div className="course_info">
                            <h4>{course.title}</h4>
                            <p>{course.description}</p>
                            <Link
                                to="/courses"
                                className="button button-primary text-decoration-none"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
