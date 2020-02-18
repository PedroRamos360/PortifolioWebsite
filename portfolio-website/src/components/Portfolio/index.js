import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import './index.css';
import CustomNavbar from "../CustomNavbar";

export default class Projects extends Component {
    render() {
        return(
            <div>
                <CustomNavbar />
                <Jumbotron>
                    <h2>Portfolio</h2>
                </Jumbotron>
            </div>
        )
    }
}