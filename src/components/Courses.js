import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "./../constants/courses";

const Courses = ({ number = 0 }) => {
    const navigate = useNavigate();
    return (
        <div className="courses ">
            <h2> Our Popular Courses</h2>
            <div className="container courses_container mt-2">
                {courses.map((course, i) => {
                    if (i < number || number === 0)
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
                    else return null;
                })}
            </div>
        </div>
    );
};

export default Courses;
