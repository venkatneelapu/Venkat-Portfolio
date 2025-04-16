import React from "react";
import "./achievements.css";

import NSS from "../../assets/NSS.png";
import Canva from "../../assets/canva.png";
import Cricket from "../../assets/Cricket.png";

import AchievementCanva from "../../assets/CANVA_pl.pdf";

const Achievements = () => {
  return (
    <section id="achievements">
      <h5>My Recent Achievements</h5>
      <h2>Achievements</h2>

      <div className="container achievements__container">
      <article className="achievements__item">
          <div className="achievements__item-image">
            <img src={Canva} alt="Canva Certificate" />
          </div>
          <h6>5000 Designs Achievement (Canva)</h6>
          <div className="achievements__item-cta">
            <a
              href={AchievementCanva}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>

        <article className="achievements__item">
          <div className="achievements__item-image">
            <img src={NSS} alt="NSS Badge" />
          </div>
          <h6>NSS Special Winter Camp Badge</h6>
          <div className="achievements__item-cta">
            <a
              href="https://www.linkedin.com/posts/venkat-naidu-neelapu_indianindependence-proudnssmember-lpuparade-activity-7097158767904980993-zIGX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3dGXUBNbzqPEjT2uYacZARy1hA6yr-qJs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>

        

        <article className="achievements__item">
          <div className="achievements__item-image">
            <img src={Cricket} alt="Cricket Tournament Winner" />
          </div>
          <h6>Winner - LPU Cricket Tournament</h6>
          <div className="achievements__item-cta">
            <a
              href="https://www.linkedin.com/posts/venkat-naidu-neelapu_lpuuniversity-bh-activity-7070001289589329920-VNVs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3dGXUBNbzqPEjT2uYacZARy1hA6yr-qJs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article>

        {/* <article className="achievements__item">
          <div className="achievements__item-image">
            <img src={Hackathon} alt="Hackathon Certificate" />
          </div>
          <h6>Hackathon Winner</h6>
          <div className="achievements__item-cta">
            <a
              href={AchievementHackathon}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Achievements;
