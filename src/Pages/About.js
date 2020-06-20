import React, { Component } from 'react';
import SlideShow from '../Components/SlideShow'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class About extends Component {
  render() {
    return (
      <Container fluid className="mx-0 px-0">
        <Row className="w-100 px-0 mx-0">
          <Col xs={0} md={1} lg={2}></Col>
          <Col xs={12} md={10} lg={8} className="px-0 mx-0 my-4">
            <SlideShow />
          </Col>
          <Col xs={0} md={1} lg={2}></Col>
        </Row>
      </Container>
    )
  }
}