import React, { Component } from 'react';
import Prices from './../Components/Prices'
import FormWholesales from './../Components/FormWholesales'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class About extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={12} md={8}>
            <h3 className="m-4 text-center">Оптовая продажа</h3>
            <Prices />
            <FormWholesales />
          </Col>
          <Col></Col>
        </Row>
      </Container>
   )
  }
}