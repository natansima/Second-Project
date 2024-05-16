import React from "react";
import "./About.css";
import profile2 from "../Images/natan.jpeg";
import giticon from "../Images/github-icon.png";
import linkedin from "../Images/linkedin-icon.png";

export default function About() {
  return (
    <div>
      <div className="container3">
        <div className="profile-container">
          <img src={profile2} alt="Profile Natan" className="profile" />
          <div className="link-container">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Natan Simões</p>
            <div className="icon-container">
              <a href="https://github.com/natansima/" target="_blank">
                <button className="button-with-icon">
                  <img src={giticon} className="icongit" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/natan-simoes12/"
                target="_blank"
              >
                <img src={linkedin} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="about">About</h1>
      <p className="about-paragraph">
        To venture into the cinematic world is an exhilarating journey, and to
        facilitate that journey,<br></br> I immersed myself in creating a movie
        watch list using React with Vite.<br></br>With React, I was able to
        shape each component of the list with ease, ensuring a smooth and
        interactive user experience.<br></br>Meanwhile, Vite provided an agile
        development environment, allowing <br></br> me to focus on the content
        of the list without worrying about the complexity of the setup.
      </p>
    </div>
  );
}
