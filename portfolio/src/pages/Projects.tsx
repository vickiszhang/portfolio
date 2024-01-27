import ProjectCard from '../components/ProjectCard';
import './Projects.css'

const Projects: React.FC = () => {

  return (
    <div id="projects" className="main">
      <div className="projects-title">
          projects
      </div>
      <div className="projects">
        <ProjectCard title="PoolPal • NWHacks 2024" 
                      tools={["React.js", "MongoDB", "Express.js","Node.js", "TailwindCSS", "Javascript", "Typescript"]}
                      desc="sdjksdfsf"
                      image="poolpal.png"/>
        <ProjectCard title="SustainEats • HackCamp 2023" 
                      tools={["Javascript", "HTML", "CSS"]}
                      desc="sasdasdsa"
                      image="../assets/insertimage"/>
        <ProjectCard title="NotBNB" 
                      tools={["React.js", "SQL", "Node.js", "Express.js", "Typescript", "Javascript", "HTML", "CSS"]}
                      desc="sasdasdsa"
                      image="../assets/insertimage"/>
        <ProjectCard title="Tetris Clone" 
                      tools={["C#", "Visual Studio", "WPF"]}
                      desc="sasdasdsa"
                      image="../assets/insertimage"/>
        <ProjectCard title="Wishlist" 
                      tools={["Java"]}
                      desc="sasdasdsa"
                      image="../assets/insertimage"/>
      </div>
    </div>
  );
};
  
  export default Projects;