import React from 'react';
import './portfolio.css';
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import Vb from '../../assets/vb.png';
import Sparkv from '../../assets/sparkv.png';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Resent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Vb} alt="" />
          </div>
            <h5>This is a portfolio item title</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Sparkv} alt="" />
          </div>
            <h5>This is a portfolio item title</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://sparkv-roadmaps.netlify.app/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Vb} alt="" />
          </div>
            <h5>This is a portfolio item title</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Vb} alt="" />
          </div>
            <h5>This is a portfolio item title</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Vb} alt="" />
          </div>
            <h5>This is a portfolio item title</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Vb} alt="" />
          </div>
            <h5>This is a portfolio item title</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
