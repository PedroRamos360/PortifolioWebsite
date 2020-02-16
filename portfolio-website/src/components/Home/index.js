import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './index.css';

export default class Home extends Component {
    render() {
        return(
            <>
            <Jumbotron>
                <h2>Pedro Ramos</h2>
                <p>Estudante no Ensino Médio do Colégio Santo Antônio em Estrela.</p>
            </Jumbotron>
            <Link to="/Projects">
                <Button bsStyle="primary">Projetos</Button>
            </Link>
            </>
        )
    }
}