import React, { Component } from 'react'
import logo from './../Images/logo.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" variant="dark" collapseOnSelect expand="md" bg="dark">
        <Container fluid className="d-flex justify-content-between">
          <Navbar.Brand href="/about">
            <img
              src={logo}
              width="150"
              height="75"
              className="mx-1"
              alt="Alem oil logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="/about">О компании</Nav.Link>
              <Nav.Link href="/retail">Розничная сеть</Nav.Link>
              <Nav.Link href="/wholesales">Оптовая продажа</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  }
}
