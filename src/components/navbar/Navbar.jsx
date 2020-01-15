import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand>Mitchell R. Hornsby</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Programming</Nav.Link>
                        <Nav.Link>Writing</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;