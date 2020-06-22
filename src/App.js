import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Projects from './components/Projects.jsx'
import Skills from './components/Skills';
import Footer from './components/Footer';
import './styles.css'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
