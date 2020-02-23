import React, { Component } from 'react';
import './index.css';
import CustomNavbar from "../../CustomNavbar";
import Ingles from "../../assets/CertificadoIngles.jpeg";

export default class Home extends Component {
    render() {
        return(
            <div id="background">
                <CustomNavbar />
                <img src={Ingles} alt=""/>
            </div>
        )
    }
}