import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Projects from './components/Projects.jsx'
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
