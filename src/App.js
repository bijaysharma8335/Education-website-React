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
