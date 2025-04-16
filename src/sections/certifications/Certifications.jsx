import React from "react";
import "./certifications.css";
import Static from "../../assets/static sites.png";
import Responsive from "../../assets/responsive sites.png";
import Python from "../../assets/python.png";
import Frontend from "./../../assets/frontend.png";
import Backend from "./../../assets/backend.png";
import Training from "../../assets/training.png";
import CertificateStatic from "../../assets/SNQJSQZHPG.pdf";
import CertificateResponsive from "../../assets/JDDFKVOHNU.pdf";
import CertificatePython from "../../assets/TDTSUYQGXF.pdf";
import CertificateFrontend from "../../assets/FrontEnd Coursera NSQL94YHCNHY.pdf";
import CertificateBackend from "../../assets/backend Coursera 6WCEFJMEH3U9.pdf";
import CertificateTraining from "../../assets/W3elites-Internship-Certificate.pdf";

const Certifications = () => {
  return (
    <section id="certifications">
      <h5>My Recent Certifications</h5>
      <h2>Certifications</h2>

      <div className="container certifications__container">
        <article className="certifications__item">
          <div className="certifications__item-image">
            <img src={Training} alt="Static Website Certificate" />
          </div>
          <h6>MERN Stack + GenAI</h6>
          <div className="certifications__item-cta">
            <a
              href={CertificateTraining}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>
        <article className="certifications__item">
          <div className="certifications__item-image">
            <img src={Frontend} alt="Static Website Certificate" />
          </div>
          <h6>Frontend Web Developers</h6>
          <div className="certifications__item-cta">
            <a
              href={CertificateFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>
        <article className="certifications__item">
          <div className="certifications__item-image">
            <img src={Backend} alt="Static Website Certificate" />
          </div>
          <h6>Server side JavaScript with Node.js</h6>
          <div className="certifications__item-cta">
            <a
              href={CertificateBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>
        <article className="certifications__item">
          <div className="certifications__item-image">
            <img src={Static} alt="Static Website Certificate" />
          </div>
          <h6>Building Your Own Static Websites</h6>
          <div className="certifications__item-cta">
            <a
              href={CertificateStatic}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>
        <article className="certifications__item">
          <div className="certifications__item-image">
            <img src={Responsive} alt="Static Website Certificate" />
          </div>
          <h6>Building Your Own Responsive Websites</h6>
          <div className="certifications__item-cta">
            <a
              href={CertificateResponsive}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>
        <article className="certifications__item">
          <div className="certifications__item-image">
            <img src={Python} alt="Static Website Certificate" />
          </div>
          <h6>Programming Foundations with Python</h6>
          <div className="certifications__item-cta">
            <a
              href={CertificatePython}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Certifications;
