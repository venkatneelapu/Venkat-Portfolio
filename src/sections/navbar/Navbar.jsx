import React from 'react';
import Logo from '../../assets/IMG-20220627-WA0025.jpg';
import { MdFormatColorFill } from "react-icons/md";
import './navbar.css';
import data from './data';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
          data.map(item => <li key={item.id}><a href={item.Link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><MdFormatColorFill/></button>
      </div>
    </nav>
  )
}

export default Navbar
