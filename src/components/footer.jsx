import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex gap-3 mb-3">
            <a href="#" className="text-white fs-5">
              <FiGithub />
            </a>
            <a href="#" className="text-white fs-5">
              <FiLinkedin />
            </a>
            <a href="#" className="text-white fs-5">
              <FiTwitter />
            </a>
          </div>
          <p className="mb-0 text-center">
            Made with <FaHeart className="text-danger" /> by Vignesh © {currentYear}
          </p>
          <p className="text-muted small mt-2">
            Built with React, Bootstrap, and Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;