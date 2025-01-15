import React from "react";
import "./css/home.css";
function Main() {
  return (
    <div className="home container">
      <div className="home-profile">
        <img
          src="/image/myp.jpg"
          alt="Ashwin Kumar R"
          className="profile-img"
        />
      </div>
      <div className="home-content">
        <h1>
        Welcome to my Codebase, I'm <span className="highlight">Ashwin Kumar</span>
        </h1>
        <p className="intro">
          Full-Stack Web and App Developer | Machine Learning Integration
          Specialist
        </p>
        <h2 className="services-heading">Code I Craft</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>📱 App Development</h3>
            <p>
              Building cross-platform apps with React Native for iOS and
              Android.
            </p>
          </div>
          <div className="service-card">
            <h3>🌐 Web Development</h3>
            <p>
              Creating responsive websites using React.js, Express.js, and
              MongoDB.
            </p>
          </div>
          <div className="service-card">
            <h3>🤖 Machine Learning</h3>
            <p>
              Developing ML models for predictive analytics and AI-powered
              solutions.
            </p>
          </div>
          <div className="service-card">
            <h3>📊 Data Analytics</h3>
            <p>
              Performing data visualization and analysis with Python for better
              insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
