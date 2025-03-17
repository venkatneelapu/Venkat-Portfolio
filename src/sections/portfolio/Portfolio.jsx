import React from 'react';
import './portfolio.css';
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import Vb from '../../assets/vb.png';
import Sparkv from '../../assets/sparkv.png';
import Hunger from '../../assets/hungerbird.png';
import TODO from '../../assets/todo.png';
import Med from '../../assets/medicals.png';
import wik from '../../assets/wik.png';
import food from '../../assets/food.png';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Resent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Sparkv} alt="" />
          </div>
            <h5>SparkV's Roadmaps</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/SparkV_Roadmaps" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://sparkv-roadmaps.netlify.app/home" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Vb} alt="" />
          </div>
            <h5>VB Computers</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/VB-computers" className='btn' target='_blank'><FaGithub />Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Med} alt="" />
          </div>
            <h5>Bhavani-Medicals & General Store</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/Bhavani-Medicals" className='btn' target='_blank'><FaGithub />Github</a>
            {/* <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a> */}
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={wik} alt="" />
          </div>
            <h5>Wikipedia Search Application</h5>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a> */}
            <a href="https://venkatj107.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TODO} alt="" />
          </div>
            <h5>Todos Application</h5>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a> */}
            <a href="https://venkatj106.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>
        

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Hunger} alt="" />
          </div>
            <h5>HUNGER-BIRD</h5>
            <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
            {/* <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a> */}
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={food} alt="" />
          </div>
            <h5>Food Munch</h5>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a> */}
            <a href="https://venkatneelapu50.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
            </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio;
