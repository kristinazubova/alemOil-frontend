import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from './Pages/About'
import Retail from './Pages/Retail'
import Wholesales from './Pages/Wholesales'
import Contacts from './Pages/Contacts'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>

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
    </>
  );
}

export default App;
