import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { teams } from "./../constants/teams";

const About = () => {
    return (
        <>
            <div className="about_achievements">
                <div className="container about_achievements-container">
                    <div className="about_achievements-left mt-5">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/07/13/12/14/inspiration-1514296_960_720.jpg"
                            alt=""
                        />
                    </div>
                    <div className="about_achievements-right ">
                        <h1 className="my-2">Achievements</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium mollitia nihil quibusdam maiores
                            vero ullam eius laudantium, in voluptas nobis nisi
                            dolorem odio totam rem error officia accusamus
                            aliquid dolore odit eaque illo quaerat ab? Totam,
                            quae optio id maiores praesentium eveniet,
                            architecto repudiandae autem amet perferendis
                            voluptatum cupiditate illo.
                        </p>
                        <div className="achievements_cards">
                            <div className="achievement_card">
                                <span className="achievement_icon">
                                    <i className="uil uil-video"></i>
                                </span>
                                <h3>450+</h3>
                                <p>Courses</p>
                            </div>
                            <div className="achievement_card">
                                <span className="achievement_icon">
                                    <i className="uil uil-users-alt"></i>
                                </span>
                                <h3>79000+</h3>
                                <p>Students</p>
                            </div>
                            <div className="achievement_card">
                                <span className="achievement_icon">
                                    <i className="uil uil-trophy"></i>
                                </span>
                                <h3>30+</h3>
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-------------------achievents-----------> */}

            <div className="team">
                <h2>Meet Our Team</h2>
                <div className="container team_container">
                    {teams.map((team, i) => (
                        <div className="team_member" key={i}>
                            <div className="team_member-image">
                                <img src={team.image} alt="" />
                            </div>
                            <div className="team_member-info">
                                <h4>{team.name}</h4>
                                <p>{team.designation}</p>
                            </div>
                            <div className="team_member-social">
                                <Link
                                    to="https://www.instagram.com"
                                    target="_blank"
                                >
                                    <i className="uil uil-instagram"></i>
                                </Link>
                                <Link
                                    to={{ pathname: "www.twitter.com" }}
                                    target="_blank"
                                >
                                    <i className="uil uil-twitter-alt"></i>
                                </Link>
                                <Link
                                    to="https://www.linkedin.com"
                                    target="_blank"
                                >
                                    <i className="uil uil-linkedin-alt"></i>
                                </Link>
                                <Link
                                    to="https://www.facebook.com"
                                    target="_blank"
                                >
                                    <i className="uil uil-facebook"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
