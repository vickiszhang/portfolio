import './JobCard.css'

const JobCard: React.FC = () => {

    return (
      <div className="mainCard">
        <h1> position</h1>
        <div>
            <h1> company</h1>
            <h1> duration</h1>
        </div>
        <div>
            tools
        </div>
        <div>
            description
        </div>
      </div>
    );
  };
  
  export default JobCard;