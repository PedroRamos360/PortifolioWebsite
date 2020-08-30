import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './index.css';

export default class Item extends Component {
   render() {
      return (
         <header className="item">
            <Button className="btn" href={this.props.href}>
               <img className="item-img" src={this.props.src} alt={this.props.alt}/>
               <div className="repo-info">
                  <p>{this.props.children}</p>
               </div>
            </Button>
         </header>
      );
   }
}
