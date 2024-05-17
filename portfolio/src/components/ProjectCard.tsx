import './ProjectCard.css'
import React from 'react';

interface ProjectCardProps {
  title: string,
  tools: string[],
  desc: string,
  image: string,
  url: string,
  overlay: string,
  video?: boolean
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, tools, desc, image, url, overlay, video = false}) => {

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
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className='project-demo'>
          {video ? (
          <video className="video" src={image} loop autoPlay muted playsInline />
            ) : (
              <img className="image" src={image} />
            )}
            <div className='image-overlay'>
              <div className="goto">
                <img src="goto.png"/>
              </div>
              {overlay}

            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default ProjectCard;