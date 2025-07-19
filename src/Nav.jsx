import React, { useEffect, useState } from "react";
import "./css/nav.css";
import { useNavigate } from "react-router";

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateTo = (path) => {
    navigate(`port${path}`);
    setIsSidebarOpen(false); 
  };

    useEffect(()=>{
        navigateTo('/')
    },[])
  return (
    <div className="nmain">
      <div className="logo">Portfolio</div>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <button onClick={() => navigateTo("/")}>Dashboard</button>
        <button onClick={() => navigateTo("/projects")}>Work Showcase</button>
        <button onClick={() => navigateTo("/about")}>Profile</button>
        <button onClick={() => navigateTo("/contact")}>Reach Out</button>
      </div>
      <div className="hpac">
        <button onClick={() => navigateTo("/")}>Dashboard</button>
        <button onClick={() => navigateTo("/projects")}>Work Showcase</button>
        <button onClick={() => navigateTo("/about")}>Profile</button>
        <button onClick={() => navigateTo("/contact")}>Reach Out</button>
      </div>
    </div>
  );
}

export default Nav;
