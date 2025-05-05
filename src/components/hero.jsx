import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="hero-section vh-100 d-flex align-items-center">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-3 fw-bold mb-3">
            Hi, I'm <span className="text-primary">VIGNESH</span>
          </h1>
          <div className="typewriter-container mb-4" style={{ height: '50px' }}>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="d-flex justify-content-center gap-3"
          >
            <Button variant="primary" size="lg" href="#projects">
              View My Work
            </Button>
            <Button variant="outline-light" size="lg" href="#contact">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;