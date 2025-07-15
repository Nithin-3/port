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
      name: "pandaDoc - Anonymous chat app",
      description: "A P2P-based anonymous chat app using WebRTC and React Native, ensuring private real-time communication.",
      github: ["https://github.com/Nithin-3/pandaDoc"],
      video: "/video/mr.mp4",
      links:["GitHub"]
    },
    {
      name: "t2t – Omegle Clone",
      description: "A personal project: real-time video/text chat web app inspired by Omegle, built with React and WebRTC.",
      github: ["https://github.com/Nithin-3/t2t"],
      video: "/video/oa.mp4",
      links:["GitHub"]
    },
    {
      name: "Checker – Staff Availability Tool",
      description: "Web tool to show staff availability (e.g., college or govt office) and track leave status.",
      github: ["https://github.com/HITMAN-AK/private_checker/"],
      video: "/video/oa.mp4",
      links:["GitHub"]
    },
        {
            name:"shell shript - Reverse shell scritp for RAT",
            description:"A tool to have remote access to desktop through the internet connection",
            github: ["https://github.com/Nithin-3/shell-shript"],
            video:"",
            links:["GitHub"]
        },
        {
            name:"IMG2Wave - a tool to convert image file to audio file",
            description:"A tool that converts images to audio files can also modify metadata, such as embedding hidden information or altering existing data, similar to how steganography works, allowing for secure and discreet data storage within the audio file.",
            github:["https://github.com/Nithin-3/IMG2WAVE"],
            video:"",
            links:["github"]
        }
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
