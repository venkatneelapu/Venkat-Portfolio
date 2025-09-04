import React, { useState } from "react";
import "./achievements.css";

import NSS from "../../assets/NSS.png";
import Canva from "../../assets/canva.png";
import Cricket from "../../assets/Cricket.png";

import AchievementCanva from "../../assets/CANVA_pl.pdf";

const achievementsData = [
  {
    img: Canva,
    title: "5000 Designs Achievement (Canva)",
    link: AchievementCanva,
    type: "pdf",
  },
  {
    img: NSS,
    title: "NSS Special Winter Camp Badge",
    link: "https://www.linkedin.com/posts/venkat-naidu-neelapu_indianindependence-proudnssmember-lpuparade-activity-7097158767904980993-zIGX",
    type: "link",
  },
  {
    img: Cricket,
    title: "Winner - LPU Cricket Tournament",
    link: "https://www.linkedin.com/posts/venkat-naidu-neelapu_lpuuniversity-bh-activity-7070001289589329920-VNVs",
    type: "link",
  },
];

const Achievements = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="achievements">
      <h5 data-aos="fade-up">My Recent Achievements</h5>
      <h2 data-aos="fade-up" data-aos-delay="100">Achievements</h2>

      <div className="container achievements__container">
        {achievementsData.map((ach, index) => (
          <article
            className="achievements__item"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="achievements__item-image">
              <img src={ach.img} alt={ach.title} />
            </div>
            <h6>{ach.title}</h6>
            <div className="achievements__item-cta">
              <button
                className="btn"
                onClick={() => setOpenModal(ach)}
              >
                View
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Popup Modal */}
      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpenModal(null)}>×</button>
            <h4>{openModal.title}</h4>
            {openModal.type === "pdf" ? (
              <embed src={openModal.link} type="application/pdf" width="100%" height="500px" />
            ) : (
              <iframe
                src={openModal.link}
                title={openModal.title}
                width="100%"
                height="500px"
                frameBorder="0"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;


// import React from "react";
// import "./achievements.css";

// import NSS from "../../assets/NSS.png";
// import Canva from "../../assets/canva.png";
// import Cricket from "../../assets/Cricket.png";

// import AchievementCanva from "../../assets/CANVA_pl.pdf";

// const Achievements = () => {
//   return (
//     <section id="achievements">
//       <h5>My Recent Achievements</h5>
//       <h2>Achievements</h2>

//       <div className="container achievements__container">
//       <article className="achievements__item">
//           <div className="achievements__item-image">
//             <img src={Canva} alt="Canva Certificate" />
//           </div>
//           <h6>5000 Designs Achievement (Canva)</h6>
//           <div className="achievements__item-cta">
//             <a
//               href={AchievementCanva}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>

//         <article className="achievements__item">
//           <div className="achievements__item-image">
//             <img src={NSS} alt="NSS Badge" />
//           </div>
//           <h6>NSS Special Winter Camp Badge</h6>
//           <div className="achievements__item-cta">
//             <a
//               href="https://www.linkedin.com/posts/venkat-naidu-neelapu_indianindependence-proudnssmember-lpuparade-activity-7097158767904980993-zIGX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3dGXUBNbzqPEjT2uYacZARy1hA6yr-qJs"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>

        

//         <article className="achievements__item">
//           <div className="achievements__item-image">
//             <img src={Cricket} alt="Cricket Tournament Winner" />
//           </div>
//           <h6>Winner - LPU Cricket Tournament</h6>
//           <div className="achievements__item-cta">
//             <a
//               href="https://www.linkedin.com/posts/venkat-naidu-neelapu_lpuuniversity-bh-activity-7070001289589329920-VNVs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3dGXUBNbzqPEjT2uYacZARy1hA6yr-qJs"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article>

//         {/* <article className="achievements__item">
//           <div className="achievements__item-image">
//             <img src={Hackathon} alt="Hackathon Certificate" />
//           </div>
//           <h6>Hackathon Winner</h6>
//           <div className="achievements__item-cta">
//             <a
//               href={AchievementHackathon}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               View
//             </a>
//           </div>
//         </article> */}
//       </div>
//     </section>
//   );
// };

// export default Achievements;
