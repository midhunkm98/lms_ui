import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Details</Card.Title>
              <Card.Text>
                <strong>Email:</strong> lms@manappuram.com<br />
                <strong>Phone:</strong> +91 9961252780<br />
                <strong>Address:</strong> HO manappuram, Valapad PO, Thrissur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Website</Card.Title>
              <Card.Text>
                <strong>Website:</strong> 
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                  www.example.com
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
