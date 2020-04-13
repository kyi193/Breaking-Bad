import React, { Component } from 'react';
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import navBackground from '../assets/headerBackground.jpg';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    background: url(${navBackground});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .navbar-brand {
    font-size: 30px;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: white;
    }
  }
`;

export default class Navigationbar extends Component {

  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
            <Form inline onSubmit={this.props.submitSearch}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                // pass update search into onchange
                onChange={this.props.updateSearch}
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )
  }
}