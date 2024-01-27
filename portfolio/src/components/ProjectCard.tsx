import './ProjectCard.css'
import React from 'react';

interface ProjectCardProps {
  title: string,
  tools: string[],
  desc: string
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, tools, desc}) => {

    return (
      <div className="project-card">
        <div className='card-top'>
          <h1 className='project-title'> {title} </h1>         
        </div>        
        <div className='project-tools'>
          <div className='tool-bubbles'>
            {tools.map((tool, index) => (
              <div key={index} className='tool-bubble'>
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className='project-desc'>
            {desc}
        </div>
        <div className='project-demo'>
          photo
        </div>
      </div>
    );
  };
  
  export default ProjectCard;