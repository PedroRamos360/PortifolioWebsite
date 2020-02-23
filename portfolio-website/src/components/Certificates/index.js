import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import CustomNavbar from "../CustomNavbar";
import Ingles from "../assets/CertificadoIngles.jpeg";

export default class Home extends Component {
    render() {
        return(
            <div id="background">
                <CustomNavbar />
                <Jumbotron>
                    <h2>Certificados</h2>
                </Jumbotron>
                <li className="certificate-item">
                    <header>
                        <img 
                            src={"https://udemy-certificate.s3.amazonaws.com/image/UC-29f687eb-eb96-409e-824b-2e3211e6c895.jpg?l=null"} 
                            alt={""}
                        />
                        <div className="certificate-info">
                            <p>
                                Certificado de Conclusão do curso online da udemy: 
                                C# Curso Completo: do básico ao avançado.
                            </p>
                        </div>
                        <Button 
                            bsSytle="primary" 
                            href="https://www.udemy.com/certificate/UC-29f687eb-eb96-409e-824b-2e3211e6c895/"
                        >Certificado na Udemy</Button>
                    </header>
                    <header>
                        <img src={Ingles} alt={"CertificadoIngles"}/>
                        <div className="certificate-info">
                            <p>
                                Certificado de Conclusão do Curso e Inglês: Touchstone 4 presencial
                                na OK Idiomas em Estrela RS. Equivale ao nível B1 de inglês.
                            </p>
                        </div>
                        <Link to="/Certificates/B1Certificate">
                            <Button bsSytle="primary">Certificado</Button>
                        </Link>
                    </header>
                </li>
            </div>
        )
    }
}