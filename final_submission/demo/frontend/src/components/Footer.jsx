import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Happy Feet!!! &copy; {currentYear}</Col>
      </Row>
    </Container>
  );
};

export default Footer;
