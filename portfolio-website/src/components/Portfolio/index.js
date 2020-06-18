import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import './responsive.css';
import CustomNavbar from "../CustomNavbar";

import Pong from "../assets/Pong.jpg";
import TreinadorAritmetico from "../assets/TreinadorAritmetico.png";
import BeTheHero from "../assets/BeTheHero.png";
import ChestFounder from "../assets/ChestFounder.png";
import DevRadar from "../assets/DevRadar.png";
import Background from '../assets/Background.jpg';

export default class Projects extends Component {
    render() {
        return(
            <div>
                <img class="background-image" src={Background} alt="background"/>
                <CustomNavbar />
                <Jumbotron>
                    <h2>Portfólio</h2>
                </Jumbotron>
                <li className="repo-item">
                    <header>
                        <img class="item-img" src={Pong} alt={"PongImage"}/>
                        <div className="repo-info">
                            <p>Jogo Pong feito em python com modo singleplayer e multyplayer</p>
                        </div>
                        <Button bsStyle="primary" href={'https://github.com/PedroRamos360/Pong'}>
                        Acessar repositório no github
                        </Button>
                    </header>
                    <header>
                        <img class="item-img" src={TreinadorAritmetico} alt={"TreinadorAritmetico"}/>
                        <div className="repo-info">
                            <p>
                                Programa que eu criei com python que tem como objetivo ajudar o usuário
                                a melhorar suas habilidades aritméticas
                            </p>
                        </div>
                        <Button className="btn" bsStyle="primary" href={'https://github.com/PedroRamos360/AritmeticTrainer'}>
                        Acessar repositório no github
                        </Button>
                    </header>
                    <header>
                        <img class="item-img" src={BeTheHero} alt={"BeTheHero"}/>
                        <div className="repo-info">
                            <p>
                                Be The Hero. Aplicação comercial que eu fiz durante a semana Omnistack 11.
                                Nela ongs podem se cadastrar para colocar casos que precisam de dinheiro e
                                os usuários podem entrar e doar para ajudar.
                            </p>
                        </div>
                        <Button className="btn" bsStyle="primary" href={'https://github.com/PedroRamos360/BeTheHero-Omnistack11'}>
                        Acessar repositório no github
                        </Button>
                    </header>
                    <header>
                        <img class="item-img" src={ChestFounder} alt={"ChestFounder"}/>
                        <div className="repo-info">
                            <p>
                                Jogo que eu fiz programado em C# usando a plataforma da Unity para desenvolvimento de jogos
                            </p>
                        </div>
                        <Button className="btn" bsStyle="primary" href={'https://github.com/PedroRamos360/ChestFounder'}>
                        Acessar repositório no github
                        </Button>
                    </header>
                    <header>
                        <img class="item-img" src={DevRadar} alt={"DevRadar"}/>
                        <div className="repo-info">
                            <p>
                                Dev Radar. Aplicação comercial que eu fiz durante a semana Omnistack 10.
                                Nela desenvolvedores se cadastram e podem procurar outros desenvolvedores que
                                ficam próximos a sua região.
                            </p>
                        </div>
                        <Button className="btn" bsStyle="primary" href={'https://github.com/PedroRamos360/DevRadar'}>
                        Acessar repositório no github
                        </Button>
                    </header>
                </li>
            </div>
        )
    }
}