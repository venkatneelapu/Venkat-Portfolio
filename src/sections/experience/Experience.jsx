import React from "react";
import "./experience.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiPython, SiMysql } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import ExperienceImage from '../../assets/bnr-1.png';

const Experience = () => {
  return (
    <section id="experience">
      <div className="skill__img" data-aos="zoom-in" data-aos-duration="1500">
        <img src={ExperienceImage} alt="ExperienceImage" className="image"/>
      </div>
      <h5 data-aos="fade-left">The skills I have</h5>
      <h2 data-aos="fade-rigth">My Skills</h2>

      <div className="container experience__container">
        
        {/* Frontend */}
        <div className="experience__frontend" data-aos="zoom-in" data-aos-duration="1500">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className="experience__backend" data-aos="zoom-in" data-aos-duration="1500">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon"/>
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFiletypeJson className="experience__details-icon"/>
              <div>
                <h4>JSON</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="experience__others" data-aos="zoom-in" data-aos-duration="1500">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaJava className="experience__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;


// import React from "react";
// import "./experience.css";
// import { FaHtml5 } from "react-icons/fa";
// import ExperienceImage from '../../assets/bnr-1.png';
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaBootstrap } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { BsFiletypeJson } from "react-icons/bs";
// import { SiMongodb } from "react-icons/si";


// const Experience = () => {
//   return (
//     <section id="experience">
//       <div className="skill__img">
//       <img src={ExperienceImage} alt="ExperienceImage" className="image"/>
//       </div>
//       <h5>The skills i have</h5>
//       <h2>My Skills</h2>
//       <div className="container experience__container">
//         <div className="experience__frontend">
//           <h3>Frontend Development</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <FaHtml5 className="experience__details-icon"/>
//               <div>
//                 <h4>HTML</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FaCss3Alt  className="experience__details-icon"/>
//               <div>
//                 <h4>CSS</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <IoLogoJavascript className="experience__details-icon"/>
//               <div>
//                 <h4>JavaScript</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FaBootstrap className="experience__details-icon"/>
//               <div>
//                 <h4>Bootstrap</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FaReact className="experience__details-icon"/>
//               <div>
//                 <h4>React</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//           </div>
//         </div>
//         <div className="experience__backend">
//           <h3>Backend Development</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <FaNodeJs className="experience__details-icon"/>
//               <div>
//                 <h4>Node JS</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiExpress className="experience__details-icon"/>
//               <div>
//                 <h4>Express JS</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <BsFiletypeJson className="experience__details-icon"/>
//               <div>
//                 <h4>JSON</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiMongodb className="experience__details-icon"/>
//               <div>
//                 <h4>MongoDB</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
