import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import './index.css';
import './responsive.css';
import CustomNavbar from "../../components/CustomNavbar";
import Item from '../../components/Item';

import Pong from "../../assets/Pong.jpg";
import TreinadorAritmetico from "../../assets/TreinadorAritmetico.png";
import BeTheHero from "../../assets/BeTheHero.png";
import ChestFounder from "../../assets/ChestFounder.png";
import DevRadar from "../../assets/DevRadar.png";
import Background from '../../assets/Background.jpg';

export default class Portfolio extends Component {
   render() {
      return(
         <div>
               <img class="background-image" src={Background} alt="background"/>
               <CustomNavbar />
               <Jumbotron>
                  <h2>Portfólio</h2>
               </Jumbotron>
               <li className="repo-item">
                  <Item href='https://github.com/PedroRamos360/Pong' src={Pong} alt='Jogo Pong'>
                     Jogo Pong feito em python com modo singleplayer e multyplayer.
                  </Item>
                  <Item href='https://github.com/PedroRamos360/AritmeticTrainer' src={TreinadorAritmetico} alt="Treinador Aritmético">
                     Programa que eu criei com python que tem como objetivo ajudar o usuário
                     a melhorar suas habilidades aritméticas.
                  </Item>
                  <Item href='https://github.com/PedroRamos360/BeTheHero-Omnistack11' src={BeTheHero} alt="Be The Hero">
                     Be The Hero. Aplicação comercial que eu fiz durante a semana Omnistack 11.
                     Nela ongs podem se cadastrar para colocar casos que precisam de dinheiro e
                     os usuários podem entrar e doar para ajudar.
                  </Item>
                  <Item href='https://github.com/PedroRamos360/ChestFounder' src={ChestFounder} alt='Chest Founder'>
                     Jogo que eu fiz programado em C# usando a plataforma da Unity para desenvolvimento de jogos.
                  </Item>
                  <Item href='https://github.com/PedroRamos360/DevRadar' src={DevRadar} alt='Dev Radar'>
                     Dev Radar. Aplicação comercial que eu fiz durante a semana Omnistack 10.
                     Nela desenvolvedores se cadastram e podem procurar outros desenvolvedores que
                     ficam próximos a sua região.
                  </Item>
               </li>
         </div>
      )
   }
}
