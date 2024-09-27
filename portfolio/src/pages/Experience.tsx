import JobCard from "../components/JobCard";
import './Experience.css'

const Experience: React.FC = () => {

  return (
    <div className="main" id="experience">
      <div className="experience-title">
        experience
      </div>
      <div className="experience">
        
        <JobCard title="Software Developer • Thrive Health"
                  duration="September 2023 - Present" 
                  tools={["TypeScript", "React.js", "Django"]}
                  desc=""/>
        <JobCard title="Developer Executive • UBC Esports Association"
                  duration="Oct 2023 - Present"
                  tools={["React.js", "JavaScript", "Wordpress"]}
                  desc="Currently helping to maintain the club website, and working on a web app to display live club PC room usage."/>
        <JobCard title="Full Stack Developer • Public Health Agency of Canada"
                  duration="May 2023 - April 2024" 
                  tools={["Python", "Django", "R", "GCP", "Azure", "Docker"]}
                  desc="At my 4 month co-op at PHAC, I had the opportunity to develop my skills in Python development. This included creating multiple web scraping scripts to facilitate data access across many projects, as well as refactoring UI components in a Django data collection app to display informative errors. I undertook some data analysis tasks, including a Covid 19 Data analysis report covering millions of lines of data. I am currently working here part-time."/>
        <JobCard title="Software Developer • UBC Computer Science Student Society"
                  duration="Oct 2023 - April 2024"
                  tools={["Next.js", "TypeScript", "JavaScript"]}
                  desc="A tech consulting program by CSSS, working on a new web application for the UBC volleyball club. I implemented UI for login/signup, as well as working on intergrating Stripe platform for user payments."/>
        <JobCard title="AI/ML Engineer • Convergence"
                  duration="Sept 2022 - April 2023" 
                  tools={["Python", "MongoDB", "SQL", "AWS", "Docker"]}
                  desc="Having my first co-op experience at Convergence, I truly learned so many things about working in a professional environment. I started off working to refactor thousands of lines of code in a enterprise level financial platfrom, I allowed my team to adopt a standard method of creating features in a more organized way. I implemented client-requested features, such as an AWS S3 bulk zip file compressor and MongoDB data modifications for seamless integration with the frontend. I successfully developed a MongoDB to SQL data migration script to fulfill client data requirements, ensuring the smooth transfer of millions of lines of data."/>
      </div>
    </div>
  );
};
  
  export default Experience;