import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './Components/Header';
import About from './Pages/About'
import Retail from './Pages/Retail'
import Wholesales from './Pages/Wholesales'
import Contacts from './Pages/Contacts'
import UpdatePrices from './Pages/UpdatePrices'
import Auth from './Pages/Auth'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Container fluid className="d-flex flex-column mx-0 px-0 min-vh-100 justify-content-between">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/retail" component={Retail} />
            <Route exact path="/wholesales" component={Wholesales} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/updatePrices" component={UpdatePrices} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Router>

        <footer>
          <Row className="py-3 bg-dark w-100 mx-0 px-3">
            <Col className="px-0 mx-0"></Col>
            <Col xs={6} md={5} lg={4} className="px-0 mx-0">
              <div className="customText mx-0 px-0">©Alem oil, 2020.</div>
            </Col>
            <Col xs={6} md={5} lg={4} className="px-0 mx-0">
              <div className="d-flex mx-0 px-0 justify-content-end">
                <a href="/auth" className="text-center customText">Для сотрудников</a>
              </div>
            </Col>
            <Col className="px-0 mx-0"></Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default App;