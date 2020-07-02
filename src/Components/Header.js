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
      <Container fluid className="mx-0 px-0 ">
        <Row className="mx-0 px-0">

          <Navbar variant="dark" collapseOnSelect expand="md" bg="dark" className="d-flex align-content-center mx-0 px-3 py-2 w-100">
            <Col xs={0} md={1} lg={2} className="mx-0 px-0"></Col>

            <Col xs={4} md={2} lg={2} className="px-1">
              <Navbar.Brand href="/" className="mx-0">
                <img
                  src={logo}
                  width="150px"
                  height="75px"
                  alt="Alem oil logo"
                  className="logo mx-1"
                />
              </Navbar.Brand>
            </Col>

            <Col xs={8} md={8} lg={6} className="d-flex flex-wrap justify-content-end pr-2 mx-0">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-1" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-right px-0">
                <Nav activeKey={location.pathname}>
                  {
                    this.state.links.map((link, index) =>
                      <Nav.Item key={index}>
                        <Nav.Link
                          href={link.href}
                          className={link.className}
                        >
                          {link.name}
                        </Nav.Link>
                      </Nav.Item>
                    )
                  }
                </Nav>
              </Navbar.Collapse>
            </Col>

            <Col xs={0} md={1} lg={2} className="px-0 mx-0"></Col>
          </Navbar>
        </Row>
      </Container>
    )
  }
}
