import JobCard from "../components/JobCard";
import './Experience.css'

const Experience: React.FC = () => {
  return (
    <div id="experience">
      Experience
      <div className="experience">
        <JobCard/>
        <JobCard/>
      </div>
    </div>
  );
};
  
  export default Experience;