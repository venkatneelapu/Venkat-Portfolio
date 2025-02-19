import React from 'react';
import './education.css';
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-item">
      <div className="education-icon"><FaSchool /></div> 
        <div className="education-details">
        <div className="education-year">2019-2020</div>
          <div className="education-text">
            10th class
            Sri Krishna High School
          </div>
        </div>
      </div>
      <div className="education-item">
      <div className="education-icon"><FaSchoolFlag /></div>
        <div className="education-details">
        <div className="education-year">2020-2022</div>
          <div className="education-text">
            Intermediate
            Vidwan jr College
          </div>
        </div>
      </div>
      <div className="education-item">
      <div className="education-icon"><FaUniversity /></div>
        <div className="education-details">
        <div className="education-year">2022-present</div>
          <div className="education-text">
            Btech CSE
            Lovely Professional University
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;