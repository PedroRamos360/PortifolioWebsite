import React, { Component } from 'react';
import { Jumbotron, Button, Image} from 'react-bootstrap';
import './index.css';
import CustomNavbar from "../CustomNavbar";
import Background from "../assets/Background.jpg";


export default class Home extends Component {
    render() {
        return(
            <>
            <img className="background" src={Background} alt=""/> 
            <CustomNavbar />
            <Jumbotron>
                <h2>Pedro Ramos</h2>
                <p>Estudante no Ensino Médio do Colégio Santo Antônio em Estrela.</p>
                <p>Linguagens de programação: Javascript, C# e Python</p>
            </Jumbotron>
            <div>
                <img className="profile-pic" src = {"https://avatars2.githubusercontent.com/u/53490820?s=460&v=4"} alt = ""/>
            </div>
            <Button bsStyle="primary" href={"https://github.com/PedroRamos360"}>Acessar Perfil no Github</Button>
            </>
        )
    }
}