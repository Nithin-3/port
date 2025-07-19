import React from "react";
import "./css/home.css";
function Main() {
  return (
    <div className="home container">
      <div className="home-profile">
        <img
          src="/port/image/myp.jpg"
          alt="Nithin"
          className="profile-img"
        />
      </div>
      <div className="home-content">
        <h1>
        Welcome to my Codebase, I'm <span className="highlight">Nithin</span>
        </h1>
        <p className="intro">
          Full-Stack Web and App Developer | Machine Learning Integration
          Specialist | Game Developer
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
            <h3>🎮 Game Development</h3>
            <p>I create 2D and 3D games using Unity and Godot, incorporating physics for realistic interactions.</p>
          </div>
          <div className="service-card">
            <h3>🤖 Machine Learning</h3>
            <p>
              Developing ML models for predictive analytics and AI-powered
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
