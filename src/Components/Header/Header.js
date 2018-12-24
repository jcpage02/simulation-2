import React, { Component } from 'react';
import './Header.css'
import Houser_Icon from './../../images/Houser_Icon.png'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={Houser_Icon} alt='logo'/>
        <h1>Houser</h1>
      </div>
    );
  }
}

export default Header;