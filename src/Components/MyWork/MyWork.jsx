import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div 
            key={index} 
            className="work-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={work.w_img} alt={work.w_name} className="work-image" />
            <div className={`work-description ${hoveredIndex === index ? 'show' : ''}`}>
              <h2>{work.w_name}</h2>
              <p>{work.w_desc}</p>
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
