import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import CustomNavbar from "../CustomNavbar";

export default class Projects extends Component {
    render() {
        return(
            <div>
                <CustomNavbar />
                <Jumbotron>
                    <h2>Portfólio</h2>
                </Jumbotron>
                <header>
                    <img src={"https://toivjon.files.wordpress.com/2017/11/javafx-pong.png?w=772"} alt={""}/>
                    <div className="repo-info">
                        <p>My version of the game Pong made with python</p>
                    </div>
                </header>
                <Button bsStyle="primary" href={''}>Acessar repositório no github</Button>
            </div>
        )
    }
}