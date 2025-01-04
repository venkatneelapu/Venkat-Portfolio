import React, { useState, useEffect } from 'react';
import Logo from '../../assets/IMG-20220627-WA0025.jpg';
import { MdFormatColorFill } from 'react-icons/md';
import './navbar.css';
import data from './data';
import Theme from '../../theme/Theme'; 

const Navbar = () => {
  const [themePopupVisible, setThemePopupVisible] = useState(false);

  const toggleThemePopup = () => {
    setThemePopupVisible(!themePopupVisible);
  };

  const changeTheme = (hue) => {
    document.documentElement.style.setProperty('--primary-hue', hue);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      changeTheme(savedColor); 
    }
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.Link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={toggleThemePopup}>
          <MdFormatColorFill />
        </button>
      </div>

      {/* Display the Theme popup if the state is true */}
      {themePopupVisible && (
        <Theme onClose={toggleThemePopup} changeTheme={changeTheme} />
      )}
    </nav>
  );
};

export default Navbar;
