import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Abdul Aziz.</span> Software Engineer
          </h1>

          <p className="home__description">
            I'm Indonesian based Senior Software Engineer with more than 9 years
            of experience specializing in front and back-end development
            (Full-stack developer). Experience with all stages of the
            development cycle for dynamic web projects. Having deep knowledge
            including advanced Front-End(HTML5, CSS3, JavaScript) and
            Back-End(C#, C++, Java, T-SQL, .Net Core, Node.js). Strong
            background in management and leadership.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  );
};

export default Home;
