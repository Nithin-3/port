import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
  );
}
export default App;
