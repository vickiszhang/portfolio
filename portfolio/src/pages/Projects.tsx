import ProjectCard from '../components/ProjectCard';
import './Projects.css'

const Projects: React.FC = () => {

  return (
    <div id="projects" className="main">
      <div className="projects-title">
          projects
      </div>
      <div className="projects">
      <ProjectCard title="BarrowTech • StormHacks 2024" 
                      tools={["React.js", "TypeScript", "MATLAB", "Three.js", "Python"]}
                      desc="Optimize your wheelbarrow load placement."
                      image="stormhacks.mkv"
                      url="https://devpost.com/software/barrowtech"
                      overlay='Check out our Devpost!'
                      video/>
      <ProjectCard title="Chicken! 2D Platformer" 
                      tools={["C#", "Unity"]}
                      desc="A small 2D scene created in Unity with sprite animations, parallax effect, player movement, and coin collection logic."
                      image="game.mp4"
                      url="https://github.com/vickiszhang/unity-basic"
                      overlay='Check out the source code!'
                      video/>
        <ProjectCard title="Oniva • YouCode 2024" 
                      tools={["React.js", "Express.js","Node.js", "JavaScript", "Tailwind CSS"]}
                      desc="Oniva activity finder allows users to get recommended a trail according to either activity preferences or the gear they currently own. Oniva pairs the recommended activity with matching Arc'teryx products, allowing users to seamlessly make purchases."
                      image="oniva.png"
                      url="https://devpost.com/software/oniva"
                      overlay='Check out our Devpost!'/>
        <ProjectCard title="ElectionGuard • cmd-f 2024" 
                      tools={["React.js", "MongoDB", "Express.js","Node.js", "JavaScript"]}
                      desc="Classifies truthfulness of political texts with, tone, bias, and criticality metrics, leveraging Cohere LLM API and DeepL language translation."
                      image="electionguard.png"
                      url="https://devpost.com/software/election-guard"
                      overlay='Check out our Devpost!'/>
        <ProjectCard title="PoolPal • NWHacks 2024" 
                      tools={["React.js", "MongoDB", "Express.js","Node.js", "TailwindCSS", "JavaScript", "TypeScript"]}
                      desc="An eco-friendly carpooling app seamlessly integrating Auth0 for secure authentication and Google Maps API to connect users, fostering sustainable transportation choices and reducing carbon footprint."
                      image="poolpal.png"
                      url="https://devpost.com/software/poolpal"
                      overlay='Check out our Devpost!'/>
        <ProjectCard title="SustainEats • HackCamp 2023" 
                      tools={["JavaScript", "HTML", "CSS"]}
                      desc="A community-driven app facilitating the redistribution of surplus food supplies, combating food waste by connecting individuals willing to share to those in need."
                      image="sustaineats.png"
                      url="https://devpost.com/software/sustaineats"
                      overlay='Check out our Devpost!'/>
        <ProjectCard title="Tetris Clone" 
                      tools={["C#", "Visual Studio", "WPF"]}
                      desc="Tetris with super cool colours :D"
                      image="tetris.png"
                      url="https://github.com/vickiszhang/tetris"
                      overlay='Check out the source code!'/>
        <ProjectCard title="NotBNB" 
                      tools={["React.js", "SQL", "Node.js", "Express.js", "TypeScript", "JavaScript", "HTML", "CSS"]}
                      desc="A comprehensive platform redefining accommodation options, akin to Airbnb, where hotels and private companies list properties for bookings. By using a relational database, it ensures efficient management of bookings and listings."
                      image="notbnb.png"
                      url="https://github.com/vickiszhang/notbnb"
                      overlay='Check out the source code!'/>
        <ProjectCard title="Wishlist" 
                      tools={["Java"]}
                      desc="An expense tracking app that helps you manage budgets and balances, set financial goals by allocating funds to wishlist items, providing a full dashboard of financial goals."
                      image="wishlist.png"
                      url="https://github.com/vickiszhang/wishlist"
                      overlay='Check out the source code!'/>
      </div>
    </div>
  );
};
  
  export default Projects;