import React, { useState } from "react";
import "./certifications.css";
import Static from "../../assets/static sites.png";
import Responsive from "../../assets/responsive sites.png";
import Python from "../../assets/python.png";
import Frontend from "./../../assets/frontend.png";
import Backend from "./../../assets/backend.png";
import Training from "../../assets/training.png";
import NPTEL from "../../assets/Nptel.png";

import CertificateStatic from "../../assets/SNQJSQZHPG.pdf";
import CertificateResponsive from "../../assets/JDDFKVOHNU.pdf";
import CertificatePython from "../../assets/TDTSUYQGXF.pdf";
import CertificateFrontend from "../../assets/FrontEnd Coursera NSQL94YHCNHY.pdf";
import CertificateBackend from "../../assets/backend Coursera 6WCEFJMEH3U9.pdf";
import CertificateTraining from "../../assets/W3elites-Internship-Certificate.pdf";
import nptel from "../../assets/Cloud Computing.pdf";

const certificationsData = [
  { img: Training, title: "MERN Stack + GenAI", org: "W3elites", pdf: CertificateTraining },
  { img: Frontend, title: "Frontend Web Developers", org: "Coursera", pdf: CertificateFrontend },
  { img: Backend, title: "Server side JavaScript with Node.js", org: "Coursera", pdf: CertificateBackend },
  { img: Static, title: "Building Your Own Static Websites", org: "NXTWAVE", pdf: CertificateStatic },
  { img: Responsive, title: "Building Your Own Responsive Websites", org: "NXTWAVE", pdf: CertificateResponsive },
  { img: Python, title: "Programming Foundations with Python", org: "NXTWAVE", pdf: CertificatePython },
  { img: NPTEL, title: "Cloud Computing", org: "NPTEL", pdf: nptel },
];

const Certifications = () => {
  const [openPDF, setOpenPDF] = useState(null);

  return (
    <section id="certifications">
      <h5>My Recent Certifications</h5>
      <h2>Certifications</h2>

      <div className="container certifications__container">
        {certificationsData.map((cert, index) => (
          <article className="certifications__item" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="certifications__item-image">
              <img src={cert.img} alt={cert.title} />
            </div>
            <h6>{cert.title}</h6>
            <p>{cert.org}</p>
            <div className="certifications__item-cta">
              <button onClick={() => setOpenPDF(cert.pdf)} className="btn">View</button>
            </div>
          </article>
        ))}
      </div>

      {/* Popup Modal */}
      {openPDF && (
        <div className="modal-overlay" onClick={() => setOpenPDF(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpenPDF(null)}>×</button>
            <embed src={openPDF} type="application/pdf" width="100%" height="500px" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;


// import React from "react";
// import "./certifications.css";
// import Static from "../../assets/static sites.png";
// import Responsive from "../../assets/responsive sites.png";
// import Python from "../../assets/python.png";
// import Frontend from "./../../assets/frontend.png";
// import Backend from "./../../assets/backend.png";
// import Training from "../../assets/training.png";
// import NPTEL from "../../assets/Nptel.png";
// import CertificateStatic from "../../assets/SNQJSQZHPG.pdf";
// import CertificateResponsive from "../../assets/JDDFKVOHNU.pdf";
// import CertificatePython from "../../assets/TDTSUYQGXF.pdf";
// import CertificateFrontend from "../../assets/FrontEnd Coursera NSQL94YHCNHY.pdf";
// import CertificateBackend from "../../assets/backend Coursera 6WCEFJMEH3U9.pdf";
// import CertificateTraining from "../../assets/W3elites-Internship-Certificate.pdf";
// import nptel from "../../assets/Cloud Computing.pdf";

// const Certifications = () => {
//   return (
//     <section id="certifications">
//       <h5>My Recent Certifications</h5>
//       <h2>Certifications</h2>

//       <div className="container certifications__container" >

//         <article className="certifications__item" >
//           <div className="certifications__item-image">
//             <img src={Training} alt="Static Website Certificate" />
//           </div>
//           <h6>MERN Stack + GenAI</h6>
//           <p>W3elites</p>
//           <div className="certifications__item-cta">
//             <a
//               href={CertificateTraining}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>

//         <article className="certifications__item">
//           <div className="certifications__item-image">
//             <img src={Frontend} alt="Static Website Certificate" />
//           </div>
//           <h6>Frontend Web Developers</h6>
//           <p>Coursera</p>
//           <div className="certifications__item-cta">
//             <a
//               href={CertificateFrontend}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>
//         <article className="certifications__item">
//           <div className="certifications__item-image">
//             <img src={Backend} alt="Static Website Certificate" />
//           </div>
//           <h6>Server side JavaScript with Node.js</h6>
//           <p>Coursera</p>
//           <div className="certifications__item-cta">
//             <a
//               href={CertificateBackend}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>
//         <article className="certifications__item">
//           <div className="certifications__item-image">
//             <img src={Static} alt="Static Website Certificate" />
//           </div>
//           <h6>Building Your Own Static Websites</h6>
//           <p>NXTWAVE</p>
//           <div className="certifications__item-cta">
//             <a
//               href={CertificateStatic}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>
//         <article className="certifications__item">
//           <div className="certifications__item-image">
//             <img src={Responsive} alt="Static Website Certificate" />
//           </div>
//           <h6>Building Your Own Responsive Websites</h6>
//           <p>NXTWAVE</p>
//           <div className="certifications__item-cta">
//             <a
//               href={CertificateResponsive}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>
//         <article className="certifications__item">
//           <div className="certifications__item-image">
//             <img src={Python} alt="Static Website Certificate" />
//           </div>
//           <h6>Programming Foundations with Python</h6>
//           <p>NXTWAVE</p>
//           <div className="certifications__item-cta">
//             <a
//               href={CertificatePython}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>

//         <article className="certifications__item">
//           <div className="certifications__item-image">
//             <img src={NPTEL} alt="Static Website Certificate" />
//           </div>
//           <h6>Cloud Computing</h6>
//           <p>NPTEL</p>
//           <div className="certifications__item-cta">
//             <a
//               href={nptel}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>

//       </div>
//     </section>
//   );
// };

// export default Certifications;
