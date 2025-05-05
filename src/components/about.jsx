import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiBootstrap } from 'react-icons/si';
import profileImage from '../assets/images/IMG-20220723-WA0191.jpg'; // Adjust the path as necessary 

function About() {
  const skills = [
    { name: "React", icon: <FaReact className="text-primary" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-success" /> },
    { name: "Express", icon: <SiExpress className="text-dark" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-warning" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-warning" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-primary" /> },
  ];

  return (
    <section id="about" className="my-5 py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={profileImage} // Replace with your actual image
              alt="Profile"
              className="img-fluid shadow-lg"
              style={{ maxWidth: '350px', border: '5px solid #fff', marginleft:'5px' }}
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-4">About <span className="text-primary">Me</span></h2>
            <p className="lead mb-4">
              I'm a <strong>Full Stack Developer/Mern Stack Developer</strong> with expertise in building responsive, 
              scalable web applications. I thrive on turning ideas into reality with clean, 
              efficient code.
            </p>
            <div className="mb-4">
              <h5 className="fw-bold">Skills:</h5>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {skills.map((skill, index) => (
                  <Badge key={index} pill bg="light" text="dark" className="p-2 shadow-sm">
                    {skill.icon} <span className="ms-1">{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <a href="#contact" className="btn btn-primary me-2">Hire Me</a>
              <a href="/resume.pdf" download className="btn btn-outline-secondary">Download CV</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;