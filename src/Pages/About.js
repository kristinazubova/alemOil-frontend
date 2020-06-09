import React, { Component } from 'react';
import SlideShow from '../Components/SlideShow'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class About extends Component {
  render() {
    return (
      <Container fluid className="mx-0 px-0">
        <Row>
          <Col></Col>
          <Col xs={12} md={8} className="px-0 mx-0">
            <SlideShow />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}