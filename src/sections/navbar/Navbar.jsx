import React, { useEffect, useState } from 'react';

import Logo from '../../assets/my-Img_2.jpg';
import './navbar.css';
import data from './data';

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
        <div className="nav__logo" aria-label="Brand">
          <img src={Logo} alt="Logo" />
          <span className="nav__name">Neelapu Venkata Naidu</span>
        </div>

        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.Link}>{item.title}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav__theme-btn"
          aria-label="Theme"
          onClick={toggleThemePopup}
        />
      </div>

      {/* theme popup removed per request */}
      {themePopupVisible && null}
    </nav>
  );
};

export default Navbar;

