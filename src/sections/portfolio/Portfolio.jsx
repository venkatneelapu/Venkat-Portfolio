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
import BrandMentions from '../../assets/brandmentions.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item' data-aos="fade-up">
          <div className="portfolio__item-image">
            <img src={BrandMentions} alt="Brand Mentions & PR Monitoring" />
          </div>
          <h5>Brand Mentions & PR Monitoring</h5>
          <p>
            A MERN-stack platform for tracking brand mentions across web and news sources. Integrated sentiment analysis and risk assessment to evaluate public perception, with automated report generation, email notifications, secure authentication, and interactive analytics dashboards.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/BrandMentionsAndPrMonitor" className='btn' target='_blank'><FaGithub /> Github</a>
            <a href="https://brandmentionsandprmonitor.netlify.app/" className='btn primary' target='_blank'><MdLiveTv /> Demo</a>
          </div>
        </article>
        
        <article className='portfolio__item' data-aos="fade-up">
          <div className="portfolio__item-image">
            <img src={Sparkv} alt="SparkV Roadmaps" />
          </div>
          <h5>SparkV's Roadmaps</h5>
          <p>
            A MERN-stack platform providing structured programming roadmaps.  
            Integrated with Gemini AI to generate personalized learning paths.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/SparkV_Roadmaps" className='btn' target='_blank'><FaGithub /> Github</a>
            <a href="https://sparkv-roadmaps.netlify.app/home" className='btn primary' target='_blank'><MdLiveTv /> Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up" data-aos-delay="100">
          <div className="portfolio__item-image">
            <img src={Vb} alt="VB Computers" />
          </div>
          <h5>VB Computers</h5>

          <p>
            A computer sales & service website designed to showcase products,  
            services, and provide smooth client interaction online.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/VB-computers" className='btn' target='_blank'><FaGithub /> Github</a>
            <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv /> Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up" data-aos-delay="200">
          <div className="portfolio__item-image">
            <img src={Med} alt="Bhavani Medicals" />
          </div>
          <h5>Bhavani-Medicals & General Store</h5>
          <p>
            An eCommerce solution for a local medical store allowing  
            users to order medicines and general products online.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu/Bhavani-Medicals" className='btn' target='_blank'><FaGithub /> Github</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up" data-aos-delay="300">
          <div className="portfolio__item-image">
            <img src={wik} alt="Wikipedia Search" />
          </div>
          <h5>Wikipedia Search Application</h5>
          <p>
            A JavaScript-based application to search Wikipedia articles  
            instantly with a clean, user-friendly interface.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://venkatj107.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv /> Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up" data-aos-delay="400">
          <div className="portfolio__item-image">
            <img src={TODO} alt="Todos App" />
          </div>
          <h5>Todos Application</h5>
          <p>
            A task management app to add, edit, and track  
            daily todos with a responsive and simple design.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://venkatj106.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv /> Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up" data-aos-delay="500">
          <div className="portfolio__item-image">
            <img src={Hunger} alt="Hunger-Bird" />
          </div>
          <h5>HUNGER-BIRD</h5>
          <p>
            A food ordering website designed with HTML & CSS,  
            focusing on user-friendly design and customer needs.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub /> Github</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up" data-aos-delay="600">
          <div className="portfolio__item-image">
            <img src={food} alt="Food Munch" />
          </div>
          <h5>Food Munch</h5>
          <p>
            A responsive food ordering demo website  
            showcasing modern UI and fast loading experience.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://venkatneelapu50.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv /> Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio;


// import React from 'react';
// import './portfolio.css';
// import { FaGithub } from "react-icons/fa";
// import { MdLiveTv } from "react-icons/md";
// import Vb from '../../assets/vb.png';
// import Sparkv from '../../assets/sparkv.png';
// import Hunger from '../../assets/hungerbird.png';
// import TODO from '../../assets/todo.png';
// import Med from '../../assets/medicals.png';
// import wik from '../../assets/wik.png';
// import food from '../../assets/food.png';



// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Resent Projects</h5>
//       <h2>Portfolio</h2>
//       <div className="container portfolio__container">

//       <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={Sparkv} alt="" />
//           </div>
//             <h5>SparkV's Roadmaps</h5>
//             <div className="portfolio__item-cta">
//             <a href="https://github.com/venkatneelapu/SparkV_Roadmaps" className='btn' target='_blank'><FaGithub />Github</a>
//             <a href="https://sparkv-roadmaps.netlify.app/home" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
//             </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={Vb} alt="" />
//           </div>
//             <h5>VB Computers</h5>
//             <div className="portfolio__item-cta">
//             <a href="https://github.com/venkatneelapu/VB-computers" className='btn' target='_blank'><FaGithub />Github</a>
//             <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
//             </div>
//         </article>
        
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={Med} alt="" />
//           </div>
//             <h5>Bhavani-Medicals & General Store</h5>
//             <div className="portfolio__item-cta">
//             <a href="https://github.com/venkatneelapu/Bhavani-Medicals" className='btn' target='_blank'><FaGithub />Github</a>
//             {/* <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a> */}
//             </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={wik} alt="" />
//           </div>
//             <h5>Wikipedia Search Application</h5>
//             <div className="portfolio__item-cta">
//             {/* <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a> */}
//             <a href="https://venkatj107.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
//             </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={TODO} alt="" />
//           </div>
//             <h5>Todos Application</h5>
//             <div className="portfolio__item-cta">
//             {/* <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a> */}
//             <a href="https://venkatj106.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
//             </div>
//         </article>
        

//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={Hunger} alt="" />
//           </div>
//             <h5>HUNGER-BIRD</h5>
//             <div className="portfolio__item-cta">
//             <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a>
//             {/* <a href="https://vb-computers.onrender.com/" className='btn primary' target='_blank'><MdLiveTv />Demo</a> */}
//             </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={food} alt="" />
//           </div>
//             <h5>Food Munch</h5>
//             <div className="portfolio__item-cta">
//             {/* <a href="https://github.com/venkatneelapu" className='btn' target='_blank'><FaGithub />Github</a> */}
//             <a href="https://venkatneelapu50.ccbp.tech/" className='btn primary' target='_blank'><MdLiveTv />Demo</a>
//             </div>
//         </article>

        
//       </div>
//     </section>
//   )
// }

// export default Portfolio;
