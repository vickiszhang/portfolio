import JobCard from "../components/JobCard";
import './Experience.css'

const Experience: React.FC = () => {

  return (
    <div className="main" id="experience">
      <div className="experience-title">
        experience
      </div>
      <div className="experience">
        
        <JobCard title="Full Stack Developer • Public Health Agency of Canada"
                  duration="May 2023 - Present" 
                  tools={["Python", "MongoDB", "SQL", "AWS"]}
                  desc="At my 4 month co-op at PHAC, I had the opportunity to develop my skills in Python development. This included creating multiple web scraping scripts to facilitate data access across many projects, as well as refactoring UI components in a Django data collection app to display informative errors. TODO"/>
        <JobCard title="Developer Executive • UBC Esports Association"
                  duration="Oct 2023 - Present"
                  tools={["React.js", "Javascript", "Wordpress"]}
                  desc="Currently helping to maintain the club website, and working on a web app to display live club PC room usage."/>
        <JobCard title="Software Developer • UBC Computer Science Student Society"
                  duration="Oct 2023 - Present"
                  tools={["Next.js", "Typescript", "Javascript"]}
                  desc="A tech consulting program by CSSS, working on a new web application for the UBC volleyball club."/>
        <JobCard title="AI/ML Engineer • Convergence"
                  duration="Sept 2022 - April 2023" 
                  tools={["Python", "Django", "R", "GCP", "Azure"]}
                  desc="I played a pivotal role in enhancing a web-scraping application by implementing client-requested features, such as an AWS S3 bulk zip file compressor and MongoDB data modifications for seamless integration with the frontend. Recognizing areas of weakness in the existing codebase, I undertook a comprehensive refactoring effort, aligning over 1000 lines of code with SOLID principles. This initiative included standardizing the use of efficient packages and adopting an object-oriented programming (OOP) class structure across the AI team. Additionally, I successfully developed a MongoDB to SQL data migration script to fulfill client data requirements, ensuring the smooth transfer of millions of lines of data."/>
      </div>
    </div>
  );
};
  
  export default Experience;