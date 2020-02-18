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
                        <NavItem>
                            <Link to="/" className="Home">Página Inicial</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Projects">Projetos</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}
