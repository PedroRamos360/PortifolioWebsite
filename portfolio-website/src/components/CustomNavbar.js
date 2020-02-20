import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./stylesNavbar.css";

export default class CustomNavbar extends Component {
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        <Navbar.Brand>Pedro Ramos</Navbar.Brand>
                        <ul className="Home">
                            <NavItem>
                                <Link to="/">Página Inicial</Link>
                            </NavItem>
                        </ul>
                        <ul className="Portfolio">
                            <NavItem>
                                <Link to="/Portfolio">Portfólio</Link>
                            </NavItem>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}
