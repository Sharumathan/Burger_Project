import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Menu from '../../assets/menu-icon.png'
const Header = () => {
  return (
    <div class = 'header'>
        <nav>
        <img class='logo' src={Logo} alt=""/>
        <img class='menu-icon' src={Menu} alt=""/> 
        </nav>
    </div>
  )
}

export default Header
