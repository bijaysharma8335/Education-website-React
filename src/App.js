import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
    window.addEventListener("scroll", () => {
        document
            .querySelector(".nav")
            .classList.toggle("window-scroll", window.scrollY > 100);
    });

    const menu = document.querySelector(".nav_menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closedBtn = document.querySelector("#close-menu-btn");

    // menuBtn.addEventListener("click", () => {
    //     menu.style.display = "flex";
    //     closedBtn.style.display = "inline-block";
    //     menuBtn.style.display = "none";
    // });
    // //close nav menu
    // const closeNav = () => {
    //     menu.style.display = "none";
    //     closedBtn.style.display = "none";
    //     menuBtn.style.display = "inline-block";
    // };

    // closedBtn.addEventListener("click", closeNav);
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses" element={<Courses />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
