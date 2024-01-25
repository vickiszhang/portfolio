import JobCard from "../components/JobCard";
import './Experience.css'

const Experience: React.FC = () => {

  return (
    <div className="main" id="experience">
      <div className="experience-title">
        Experience
      </div>
      <div className="experience">
        
        <JobCard title="Full Stack Developer • Public Health Agency of Canada"
                  duration="May 2023 - Present" 
                  tools={["Python", "MongoDB", "SQL", "AWS"]}
                  desc="I standardized the development of Python scripts across various projects, automating data collection through web scraping. This initiative streamlined development workflows, providing a consistent and efficient approach to gather essential information. Additionally, I played a key role in enhancing the user interface of a Django data collection application. By implementing error display functionalities for form entries, I significantly improved the user experience. Furthermore, I contributed to optimizing file transfers within the development environment by developing an API wrapper. This wrapper simplified large file submissions through Liquidfiles, enhancing the overall efficiency of file transfer processes."/>
        <JobCard title="AI/ML Engineer"
                  duration="Sept 2022 - April 2023" 
                  tools={["Python", "Django", "R", "GCP", "Azure"]}
                  desc="I played a pivotal role in enhancing a web-scraping application by implementing client-requested features, such as an AWS S3 bulk zip file compressor and MongoDB data modifications for seamless integration with the frontend. Recognizing areas of weakness in the existing codebase, I undertook a comprehensive refactoring effort, aligning over 1000 lines of code with SOLID principles. This initiative included standardizing the use of efficient packages and adopting an object-oriented programming (OOP) class structure across the AI team. Additionally, I successfully developed a MongoDB to SQL data migration script to fulfill client data requirements, ensuring the smooth transfer of millions of lines of data."/>
      </div>
    </div>
  );
};
  
  export default Experience;