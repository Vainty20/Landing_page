import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './JobListStyles.css'

import { FaFacebookSquare, FaAmazon, FaMoneyCheckAlt } from 'react-icons/fa';

const iconList = [FaFacebookSquare, FaAmazon, FaMoneyCheckAlt];

const JobList = () => {
  const [expanded, setExpanded] = useState(false);

  const cardsData = [
    {
      title: 'Meta Business Suite',
      content: 'Social Media Manager',
      description: 'Full Time',
      description2: '2 positions available',
    },
    {
      title: 'Amazon Inc.',
      content: 'IT Staff',
      description: 'Part Time',
      description2: '2 positions available',
    },
    {
      title: 'LandBank Inc.',
      content: 'Accountant',
      description: 'Full Time',
      description2: '2 positions available',
    },
  ];

  return (
        <div name='joblist' className='joblist'>
            <div className="joblist-container">
                <h1>Latest <span>Jobs</span></h1>
                  <div className="three-card-view">
                    {cardsData.map((card, index) => (
                      <div className={`job-card ${expanded ? 'expanded' : ''}`} key={index}>
                        <div className="job-card-icon" id='job-card-icon'>
                            {React.createElement(iconList[index])}
                        </div>
                        <div className="job-card-content" id='job-card-icon'>
                          <h2>{card.title}</h2>
                          <h3>{card.content}</h3>
                          <p>{card.description}</p>
                          <p>{card.description2}</p>
                          {!expanded && (
                          <button className="show-more-button" onClick={() => setExpanded(true)}>
                              Show more
                          </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className='Job-btn' id='job-btn'><Link to='findjob'>Find more Job</Link></button>
            </div>
        </div>
  );
};

export default JobList;
