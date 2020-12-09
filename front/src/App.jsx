import React from "react";
import "./sass/style.scss";

import { AboutMe, Home, Skills, Projects, Contact } from "./components/index";
export default function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
