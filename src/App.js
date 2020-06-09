import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from './Pages/About'
import Retail from './Pages/Retail'
import Wholesales from './Pages/Wholesales'
import Contacts from './Pages/Contacts'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Container fluid className="mx-0 px-0">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/retail" component={Retail} />
            <Route exact path="/wholesales" component={Wholesales} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>

        <footer className="py-3 bg-dark position-relative">
          <div className="container-fluid text-center text-white">@Alem oil, 2020.</div>
        </footer>


      </Container>

    </>
  );
}

export default App;
