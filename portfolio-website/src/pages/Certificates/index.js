import React, { Component } from 'react';
import { Jumbotron} from 'react-bootstrap';

import './index.css';
import './responsive.css';
import CustomNavbar from "../../components/CustomNavbar/index.js";
import Item from '../../components/Item';

import Background from '../../assets/Background.jpg';
import Ingles from "../../assets/CertificadoIngles.jpeg";

export default class Certificates extends Component {
   render() {
      return(
         <div>
            <img class="background-image" src={Background} alt="background"/>
            <CustomNavbar />
            <Jumbotron>
               <h2>Certificados</h2>
            </Jumbotron>
            <li className="certificate-item">
               <Item
               href="https://www.udemy.com/certificate/UC-29f687eb-eb96-409e-824b-2e3211e6c895/"
               src="https://udemy-certificate.s3.amazonaws.com/image/UC-29f687eb-eb96-409e-824b-2e3211e6c895.jpg?l=null"
               alt="C# Certificate"
               >
               Certificado de Conclusão do curso online da udemy:
               C# Curso Completo: do básico ao avançado.
               </Item>
               <Item src={Ingles} alt="Certificado de Inglês">
                  Certificado de Conclusão do Curso e Inglês: Touchstone 4 presencial
                  na OK Idiomas em Estrela RS. Equivale ao nível B1 de inglês.
               </Item>
            </li>
         </div>
      )
   }
}
