import './JobCard.css'
import React from 'react';


interface JobCardProps {
  tools: string[];
  title: string;
  duration: string;
  desc: string;
}

const JobCard: React.FC<JobCardProps> = ({title, duration, tools, desc }) => {

    return (
      <div className="mainCard">
        <div className='card-top'>
          <h1 className='job-title'> {title} </h1>         
          <h1 className='job-duration'> {duration}</h1>
        </div>
        <div className='job-tools'>
          <div className='tool-bubbles'>
            {tools.map((tool, index) => (
              <div key={index} className='tool-bubble'>
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className='job-desc'>
            {desc}
        </div>
      </div>
    );
  };
  
  export default JobCard;