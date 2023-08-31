import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

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
            "Im a passionate Software Engineer with over nine years of
            experience in software development. My focus is on creating
            innovative technical solutions and delivering exceptional user
            experiences. I have expertise in desktop and web application development, with
            in-depth knowledge of programming languages like JavaScript, .NET
            Core, and Java.</p>
            
            {/* <p className="home__description">I take pride in developing efficient and scalable
            solutions, continually seeking ways to improve code quality and
            development processes. Throughout my career, I have contributed to
            several major projects, ranging from core banking assurance to
            branch delivery system authentication using fingerprint devices.</p>  */}
            
            <p className="home__description">In addition to technical skills, I possess strong communication
            abilities and excel at collaborating within teams. I enjoy tackling
            technical challenges and continuously strive to learn and adapt to
            industry advancements. </p>

            <p className="home__description">I believe technology can change the world for
            the better, and I am committed to contributing to the development of
            technology that positively impacts society. If you are seeking
            someone dedicated, open-minded, and enthusiastic about technological
            innovation, I am ready to collaborate with you."
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
