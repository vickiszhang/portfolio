import ProjectCard from '../components/ProjectCard';
import './Projects.css'

const Projects: React.FC = () => {

  return (
    <div id="projects" className="main">
      <div className="projects-title">
          Projects
      </div>
      <div className="projects">
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
};
  
  export default Projects;