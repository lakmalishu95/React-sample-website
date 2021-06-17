import React from "react";
import "../App.css";
import {Navbar,NavDropdown,Nav,Button,Form,FormControl} from 'react-bootstrap';
import logo from '../images/logo.png'

// header (navbar)........................

function HeadNav() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="auto"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>                   
                <Nav.Link href="#home" className="text-secondary">Help Center</Nav.Link>
                <Nav.Link href="#link" className="text-secondary">SignIn</Nav.Link>                   
                <Button  variant="danger">Get Start</Button>                
            </Navbar.Collapse>
        </Navbar>
       
    );
}

export default HeadNav;
