import React, { Component } from 'react';
import './index.css';
import CustomNavbar from "../../components/CustomNavbar";
import Ingles from "../../assets/CertificadoIngles.jpeg";
import Background from "../../assets/Background.jpg";

export default class B1Certificate extends Component {
    render() {
        return(
            <div>
                <CustomNavbar />
                <img class="background-image" src={Background} alt="background"></img>
                <img class="certificate" src={Ingles} alt="Certificado de inglês"/>
            </div>
        )
    }
}
