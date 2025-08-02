import React from "react";
import { HashRouter , Route, Routes } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
        <HashRouter>
            <Nav />
            <Routes>
                <Route path="/port/" element={<Main />}></Route>
                <Route path="/port/projects" element={<Projects />}></Route>
                <Route path="/port/about" element={<About />}></Route>
                <Route path="/port/contact" element={<Contact />}></Route>
            </Routes>
        </HashRouter>
  );
}
export default App;
