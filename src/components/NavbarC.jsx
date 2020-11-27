import React from 'react';
import Link from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './styles/Navbar.css';

class NavbarC extends React.Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg" style={{color:'#FFF'}}>
                <Navbar.Brand style={{color:'#FFF'}} href="/">News & News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{color:'#FFF'}} href="/">Inicio</Nav.Link>
                        <Nav.Link style={{color:'#FFF'}} href="/ListaNoticias">Noticias</Nav.Link>
                        <Nav.Link style={{color:'#FFF'}} href="/Contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarC;