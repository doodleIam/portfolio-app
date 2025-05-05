import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiSend, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5 fw-bold">Get In <span className="text-primary">Touch</span></h2>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <Form className="shadow p-4 rounded">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message here..." required />
                </Form.Group>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" type="submit" className="w-100">
                    <FiSend className="me-2" /> Send Message
                  </Button>
                </motion.div>
              </Form>
            </Col>
            <Col lg={6}>
              <div className="h-100 d-flex flex-column justify-content-center ps-lg-4">
                <h4 className="mb-4">Contact Information</h4>
                <p className="mb-4">
                  Feel free to reach out to me for job opportunities, collaborations, or just a friendly hello!
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <FiMail size={20} className="me-3 text-primary" />
                    <span>vignesh02103@gmail.com</span>
                  </div>
                  <div className="d-flex gap-3 mt-3">
                    <Button variant="outline-primary" href="#" className="d-flex align-items-center">
                      <FiGithub className="me-2" /> GitHub
                    </Button>
                    <Button variant="outline-primary" href="https://www.linkedin.com/in/vignesh-a-8846b5294" className="d-flex align-items-center">
                      <FiLinkedin className="me-2" /> LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;