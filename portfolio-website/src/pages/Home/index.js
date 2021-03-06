import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import './responsive.css';
import CustomNavbar from "../../components/CustomNavbar/index.js";
import Background from '../../assets/Background.jpg';

export default class Home extends Component {
    render() {
        return(
            <div class="content">
                <img class="background-image" src={Background} alt="background"/>
                <CustomNavbar class="navbar" />
                <Jumbotron>
                    <h2>Pedro Ramos</h2>
                    <p>Estudante no Ensino Médio do Colégio Santo Antônio em Estrela.</p>
                    <p>Linguagens de programação: Javascript, C# e Python</p>
                </Jumbotron>
                <div class="profile">
                    <img className="profile-pic" src = {"https://avatars2.githubusercontent.com/u/53490820?s=460&v=4"} alt = ""/>
                    <Button id="btn-primary" bsStyle="primary" href={"https://github.com/PedroRamos360"}>Acessar Perfil no Github</Button>
                </div>
            </div>
        )
    }
}
