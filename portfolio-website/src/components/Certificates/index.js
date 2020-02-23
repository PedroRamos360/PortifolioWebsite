import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './index.css';
import CustomNavbar from "../CustomNavbar";

export default class Home extends Component {
    render() {
        return(
            <div id="background">
                <CustomNavbar />
                <Jumbotron>
                    <h2>Certificados</h2>
                </Jumbotron>
            </div>
        )
    }
}