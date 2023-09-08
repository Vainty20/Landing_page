import React from 'react'
import './FindJobStyles.css'
import { FaCode, FaLightbulb, FaCalculator, FaLaptopCode, FaRegLightbulb, FaBookReader } from 'react-icons/fa';

const iconList = [FaCode, FaLightbulb, FaCalculator, FaLaptopCode, FaRegLightbulb, FaBookReader];

const CardView = () => {
    const cardsData = [
      {
        title: 'Information Technology',
        content: '54 jobs available',
      },
      {
        title: 'Data Analysis',
        content: '93 jobs available',
      },
      {
        title: 'Accounting',
        content: '42 jobs available',
      },
      {
        title: 'Information Technology',
        content: '54 jobs available',
      },
      {
        title: 'Data Analysis',
        content: '93 jobs available',
      },
      {
        title: 'Accounting',
        content: '42 jobs available',
      },
    ];

    return (
      <div name='findjob' className='findjob'>
            <div className="findjob-container">
                <h1>Solutions that are</h1>
                <h3><span>right infront of you</span></h3>
                    <div className="six-card-view">
                    {cardsData.map((card, index) => (
                      <div className="card" key={index}>
                        <div className="card-icon">
                          {React.createElement(iconList[index])}
                        </div>
                        <div className="card-content">
                          <h2>{card.title}</h2>
                          <p>{card.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>
      </div>
    )
}

export default CardView
