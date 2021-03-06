import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Queue</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/signup">Sign Up</NavItem>
            <NavItem href="/login">Log In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
    );
  }
}

export default App;
