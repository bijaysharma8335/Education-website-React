import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "./../constants/courses";

const Courses = () => {
    const navigate = useNavigate();
    return (
        <div className="courses ">
            <h2 className=""> Our Popular Courses</h2>
            <div className="container courses_container mt-2">
                {courses.map((course, i) => {
                    return (
                        <div
                            className="course"
                            key={i}
                            // onClick={() => navigate("/courses")}
                        >
                            <img src={course.image} alt="" height={200} />

                            <div className="course_info">
                                <h4>{course.title}</h4>
                                
                                <p>{course.description}</p>
                                <Link
                                    to={`/${course.id}/courses`}
                                    state={{ course }}
                                    className="button button-primary text-decoration-none"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Courses;
