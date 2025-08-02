import React from "react";
import "./css/about.css";

function About() {
  return (
    <div className="about container">
      <div className="about-card">
        <h2>About Me</h2>
        <p className="intro">A developer passionate about building apps, games, and web experiences using React Native, MERN stack, Unity, and Godot. I completed my B.Tech in Artificial Intelligence & Machine Learning, and I love solving real-world problems through code.</p>
        <div className="about-section">
          <h3>Education</h3>
          <div className="content-box">
            <p>
              <strong>K Ramakrishnan College Of Technology, Trichy</strong>{" "}
              <br />
              <span className="subtext">
                B.Tech in Artificial Intelligence and Machine Learning
                (2021-2025)
              </span>
              <br />
            </p>
          </div>
        </div>

        <div className="about-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Python Programming</li>
            <li>Java Script</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>My sql</li>
            <li>Machine Learning with Python</li>
            <li>Data Structures and Algorithms (DSA)</li>
            <li>Unity</li>
            <li>Godot</li>
            <li>Game Physics - Engine</li>
          </ul>
        </div>

        <a href="/port/NITHIN-FlowCV-Resume-20250802.pdf" download="Nithin-Resume.pdf" className="resume-btn" >
          Access My Professional Resume
        </a>
      </div>
    </div>
  );
}

export default About;
