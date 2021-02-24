import React, { Component } from 'react'
import logo from './../Images/logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      links: [{
        name: 'О компании',
        href: '/',
        className: 'customText lg-pr-3'
      },
      {
        name: 'Розничная сеть',
        href: '/retail',
        className: 'customText lg-pr-3'
      },
      {
        name: 'Оптовая продажа',
        href: '/wholesales',
        className: 'customText lg-pr-3'
      },
      {
        name: 'Контакты',
        href: '/contacts',
        className: 'customText'
      }
      ]
    }
  }

  render() {
    const { location } = this.props;

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150px"
            height="75px"
            alt="Alem oil logo"
            className="logo mx-1"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-1" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {
              this.state.links.map((link, index) =>
                <Nav.Link href={link.href} key={index} className="text-center">{link.name}</Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
