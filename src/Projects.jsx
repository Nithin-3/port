import React, { useRef } from "react";
import "./css/project.css";

function Projects() {
  const projectsRef = useRef(null);

  const handleScroll = (direction) => {
    const container = projectsRef.current;
    const scrollAmount = container.clientWidth / 2;
    if (direction === "left") {
      if (container.scrollLeft > 0) {
        container.scrollLeft -= scrollAmount;  
      }
    } else {
      if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
        container.scrollLeft += scrollAmount;  
      }
    }
  
    console.log('After Scroll:', container.scrollLeft);
  };
  const projectData = [
    {
      name: "AI Movie Recommender",
      description: "The AI Movie Suggestions and Watchlist is an intelligent mobile application developed using React Native, Mongoose, Express.js, and Python. This application leverages machine learning to provide personalized movie recommendations based on the storyline. By analyzing user preferences and employing a content-based filtering approach, the app suggests movies that closely align with individual tastes.In addition to recommending movies, the application offers a robust watchlist feature, enabling users to save movies for later viewing conveniently. The backend infrastructure, built with Express.js and Mongoose, ensures seamless data management and interaction with a MongoDB database. The Python-based machine learning model is the core of the recommendation engine, enhancing user engagement by delivering precise and meaningful suggestions.This project combines advanced AI techniques and a user-friendly interface, aiming to enhance the movie discovery experience for users worldwide.",
      github: ["https://github.com/HITMAN-AK/mr_client", "https://github.com/HITMAN-AK/mr_server", "https://github.com/HITMAN-AK/mr_model"],
      video: "/video/mr.mp4",
      links:["FRONT-END","BACK-END","ML-MODEL"]
    },
    {
      name: "Real-Time Office Tracker",
      description: "It is an innovative web-based platform designed to enhance public service access by providing accurate, real-time availability information for government officials. The system features dual portals: one for officials to manually update their availability and another for the public to view this information conveniently. By integrating computer vision technology (cv2), the platform automates the monitoring of office spaces, ensuring reliable and up-to-date availability data. This solution addresses inefficiencies in traditional methods, reduces manual errors, and improves transparency. Citizens can now save time and resources by checking officials' availability before visiting government offices, while officials benefit from a streamlined process for updating their status. Ultimately, the Real-Time Office Availability Tracker fosters a more efficient and accessible public service environment, bridging the gap between officials and citizens through technology.",
      github: ["https://github.com/HITMAN-AK/edc_client", "https://github.com/HITMAN-AK/private_checker", "https://github.com/HITMAN-AK/edc_server"],
      video: "/video/oa.mp4",
      links:["PUBLIC-PORTAL(FRONTEND)","OFFICIAL-PORTAL(FRONTEND)","BACK-END"]
    },
    {
      name: "Esports Gaming Platform",
      description: "GamingHub is an innovative esports platform that offers gamers an opportunity to compete in thrilling matches across various titles. Players can participate in competitions with a simple entry fee and win real cash prizes for achievements like match victories, top spots, and individual kills. Hosts can also curate events and earn revenue, creating a dynamic ecosystem for all involved. With a focus on secure transactions and a seamless experience, GamingHub ensures a rewarding and immersive platform for both players and hosts. Join today to level up your esports experience!",
      github: ["https://github.com/HITMAN-AK/gh_cli", "https://github.com/HITMAN-AK/gh_ser", "https://gaminghub.vercel.app/"],
      video: "/video/gh.mp4",
      links:["FRONT-END","BACK-END","WEBSITE-LINK"]
    },
  ];

  return (
    <div className="projects-section">
      <button className="scroll-button left" onClick={() => handleScroll("left")}>
        &lt;
      </button>
      <div className="projects" ref={projectsRef}>
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="github-links">
              {project.github.map((link, idx) => (
                <a href={link} target="_blank" rel="noopener noreferrer" key={idx}>
                  {project.links[idx]} 
                </a>
              ))}
            </div>
            <video controls src={project.video}></video>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => handleScroll("right")}>
        &gt;
      </button>
    </div>
  );
}

export default Projects;
