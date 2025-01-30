import React from 'react';
import HeaderImage from '../../assets/my-Img_2.jpg';
import './header.css'
import data from './data';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className='header__profile'>
          <img src={HeaderImage} alt="Header Porfile" />
          </div>
          <h3>Neelapu venkata Naidu</h3>
          <p>
            I’m a full-stack developer specializing in building functional, mobile-responsive web applications. With expertise in both front-end and back-end technologies, I deliver modern, scalable solutions tailored to your needs. Let’s bring your project to life—reach out today!
          </p>
          <div className='header__cta'>
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(items => <a key={items.id} href={items.link} target='_blank'
              rel='noopener noreferrer'>{items.icon}</a>)
            }
            
          </div>
      </div>
    </header>
  )
}

export default Header;
