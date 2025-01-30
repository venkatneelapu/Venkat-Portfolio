import React from 'react';
import AboutImage from '../../assets/undraw_Profile_re_4a55.png';
import EduImage from '../../assets/undraw_education_f8ru.png';
import CV from '../../assets/Venkat.Neelapu(Fresher).pdf';
import { FaDownload } from "react-icons/fa6";
import Card from '../../components/Card';
import data from './data';
import './about.css';
import Education from '../education/Education';

function About() {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Building projects that make an impact is something I'm passionate about. As a dedicated web development student, I've completed three projects so far, which have helped me hone my skills in technologies like the MERN stack. Though I'm still early in my journey, I am constantly motivated to learn and grow. I look forward to taking on new challenges and delivering solutions that exceed expectations.
          </p>
          <p>
          Hi, my name is Neelapu Venkata Naidu from Andhra Pradesh. I'm currently pursuing my 3rd year in BTech at Lovely Professional University. I'm a passionate web developer focused on building modern and functional web solutions. My top priority is to ensure your project is built with attention to detail and industry-standard practices, so your business runs smoothly online. Let's collaborate and bring your ideas to life! Check out my resume below for more details.
          </p>
          <a href={CV} download className='btn primary'>Download CV<FaDownload /></a>
        </div>
        
      </div>
      <div className="edu">
          
        <div className="education__cont">
        <Education />
        </div>
        <div className="edu__img">
            <img src={EduImage} alt="" />
          </div>
        </div>
    </section>
  )
}

export default About;
