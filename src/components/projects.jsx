import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubLink: '#',
      liveLink: '#',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Task Management App',
      description: 'Productivity app with real-time collaboration',
      tags: ['React', 'Firebase', 'Material UI'],
      githubLink: '#',
      liveLink: '#',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio website',
      tags: ['React', 'Bootstrap', 'Framer Motion'],
      githubLink: '#',
      liveLink: '#',
      image: 'https://via.placeholder.com/400x250'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5 fw-bold">My <span className="text-primary">Projects</span></h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project, index) => (
              <Col key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img variant="top" src={project.image} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="badge bg-secondary me-2">{tag}</span>
                        ))}
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0">
                      <Button variant="outline-primary" size="sm" href={project.githubLink} className="me-2">
                        <FiGithub className="me-1" /> Code
                      </Button>
                      <Button variant="primary" size="sm" href={project.liveLink}>
                        <FiExternalLink className="me-1" /> Live Demo
                      </Button>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;