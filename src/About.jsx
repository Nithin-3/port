import React from "react";
import "./css/about.css";

function About() {
  return (
    <div className="about container">
      <div className="about-card">
        <h2>About Me</h2>
        <p className="intro">
          Enthusiastic and skilled Full Stack Web and App Developer with
          hands-on experience in building responsive, user-friendly
          applications. Specialized in integrating Machine Learning models into
          real-world solutions to enhance functionality and user experience.
          Adept in using modern frameworks and tools across the development
          stack, with a strong foundation in both front-end and back-end
          technologies.
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
              <span style={{ color: "#1db954" }}> CGPA : </span>
              7.5
            </p>
            <p>
              <strong>Best Matric Higher Secondary School, Thanjavur</strong>{" "}
              <br />
              <span className="subtext">12th (2020-2021)</span> <br />
              <span style={{ color: "#1db954" }}>Percentage : </span>
              85%.
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
          </ul>
        </div>

        <div className="about-section">
          <h3>Certifications</h3>
          <ul className="certificates-list">
            <li>
              <strong>Machine Learning With Python</strong>
              <a
                href="/certificates/Machine_Learning_With_Python.pdf"
                download="Machine_Learning_With_Python.pdf"
                className="download-link"
              >
                Download
              </a>
            </li>
            <li>
              <strong>Problem Solving Intermediate</strong>
              <a
                href="/certificates/Problem_Solving_Intermediate.pdf"
                download="Problem_Solving_Intermediate.pdf"
                className="download-link"
              >
                Download
              </a>
            </li>
            <li>
              <strong>Python Programming</strong>
              <a
                href="/certificates/Python_Programming.pdf"
                download="Python_Programming.pdf"
                className="download-link"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
        <a
          href="/certificates/Resume.pdf"
          download="Resume.pdf"
          className="resume-btn"
        >
          Access My Professional Resume
        </a>
      </div>
    </div>
  );
}

export default About;
