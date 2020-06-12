import React, { Component } from 'react';
import Background from './img/keyboard.jpg';

import './Header.css';

const mystyles = {
    'backgroundImage': `url( ${Background} )`,
    'height': '50vh',
    'backgroundSize': 'cover'
}


class Header extends Component {

    render() {
        return(
            
            <header style={mystyles}>
                <h1><ion-icon name="heart"></ion-icon>   {this.props.title} </h1> 
                <p> This is my online portfolio site built with React.JS </p> 
                <p> Thanks for stopping by! :D</p>
                <a href="#button">{this.props.button}</a>
            </header>

        );
    }

    
};


export default Header;