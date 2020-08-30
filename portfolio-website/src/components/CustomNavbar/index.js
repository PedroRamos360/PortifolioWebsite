import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./index.css";

export default class CustomNavbar extends Component {
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        <Navbar.Brand id="brand">Pedro Ramos</Navbar.Brand>
                        <ul className="Home">
                            <NavItem>
                                <Link className="link" to="/">Página Inicial</Link>
                            </NavItem>
                        </ul>
                        <ul className="Portfolio">
                            <NavItem>
                                <Link className="link" to="/Portfolio">Portfólio</Link>
                            </NavItem>
                        </ul>
                        <ul className="Certificados">
                            <NavItem>
                                <Link className="link" to="/Certificates">Certificados</Link>
                            </NavItem>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}
