import React from "react";
import "./css/about.css";

function About() {
  return (
    <div className="about container">
      <div className="about-card">
        <h2>About Me</h2>
        <p className="intro">
          I'm a Full-Stack Developer proficient in building scalable
          applications with a strong focus on Machine Learning integration.
          Specializing in leveraging modern frameworks and algorithms to create
          optimized, user-centric solutions that enhance both functionality and
          performance.
        </p>
        <div className="about-section">
          <h3>Education</h3>
          <div className="content-box">
            <p>
              <strong>K Ramakrishnan College Of Technology, Trichy</strong>{" "}
              <br />
              <span className="subtext">
                B.Tech in Artificial Intelligence and Machine Learning
                (2021-2025)
              </span>{" "}
              <br />
              <span style={{ color: "#1db954" }}> Achievements:</span>
              "O" Grade in Python Programming Laboratory and Java Programming
              Laboratory.
            </p>
            <p>
              <strong>Best Matric Higher Secondary School, Thanjavur</strong>{" "}
              <br />
              <span className="subtext">12th (2020-2021)</span> <br />
              <span style={{ color: "#1db954" }}>Percentage:</span>
              85%.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Python Programming</li>
            <li>Java Programming</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Machine Learning with Python</li>
            <li>Data Structures and Algorithms (DSA)</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Certifications</h3>
          <ul className="certificates-list">
            <li>
              <strong>Machine Learning With Python</strong>
              <a href="/certificates/Machine_Learning_With_Python.pdf" download="Machine_Learning_With_Python.pdf" className="download-link">
                Download
              </a>
            </li>
            <li>
              <strong>Problem Solving Intermediate</strong>
              <a href="/certificates/Problem_Solving_Intermediate.pdf" download="Problem_Solving_Intermediate.pdf" className="download-link">
                Download
              </a>
            </li>
            <li>
              <strong>Java Programming</strong>
              <a href="/certificates/Java_Programming.pdf" download="Java_Programming.pdf" className="download-link">
                Download
              </a>
            </li>
            <li>
              <strong>Python Programming</strong>
              <a href="/certificates/Python_Programming.pdf" download="Python_Programming.pdf" className="download-link">
                Download
              </a>
            </li>
          </ul>
        </div>
        <a href="/certificates/Resume.pdf" download="Resume.pdf" className="resume-btn">
          Access My Professional Resume
        </a>
      </div>
    </div>
  );
}

export default About;
