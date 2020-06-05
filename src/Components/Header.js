import React, { Component } from 'react'
import logo from './../Images/logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default class Header extends Component {
  render() {
    return (
      <Container fluid className="mx-0 px-0">
        <Navbar variant="dark" collapseOnSelect expand="md" bg="dark" className="px-5">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="150"
              height="75"
              className="ml-5"
              alt="Alem oil logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"  className="d-flex justify-content-end mr-5">
            <Nav >
              <Nav.Link href="/">О компании</Nav.Link>
              <Nav.Link href="/retail">Розничная сеть</Nav.Link>
              <Nav.Link href="/wholesales">Оптовая продажа</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

    )
  }
}
