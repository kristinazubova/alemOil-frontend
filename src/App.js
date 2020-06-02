import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from './Pages/About.js'
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
          <Route exact path="/about" component={About} />
          <Route exact path="/reatil" component={Retail} />
          <Route exact path="/wholesales" component={Wholesales} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
