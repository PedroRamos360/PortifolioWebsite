import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import CustomNavbar from "../CustomNavbar";
import Pong from "../assets/Pong.jpg";

export default class Projects extends Component {
    render() {
        return(
            <div>
                <CustomNavbar />
                <Jumbotron>
                    <h2>Portfólio</h2>
                </Jumbotron>
                <header>
                    <img src={Pong} alt={"PongImage"}/>
                    <div className="repo-info">
                        <p>Jogo Pong feito em python com modo singleplayer e multyplayer</p>
                    </div>
                </header>
                <Button bsStyle="primary" href={'https://github.com/PedroRamos360/Pong'}>Acessar repositório no github</Button>
            </div>
        )
    }
}