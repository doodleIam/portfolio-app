import React from 'react';
import NavbarComponent from './components/navbar';
import About from './components/about';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
