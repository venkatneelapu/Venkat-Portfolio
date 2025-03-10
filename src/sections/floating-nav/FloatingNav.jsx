import React from 'react';
import './floating-nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import {useState} from 'react';

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <section id='floating__nav' className='floating_nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact /></a>
    </section>
  )
}

export default FloatingNav;
