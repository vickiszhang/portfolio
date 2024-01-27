import './Resume.css'
import resume from '../assets/resume.pdf'


const Resume: React.FC = () => {

    return (
      <a href={resume} target='_blank' rel='noopener noreferrer'>
        <button className='resume'>
          <div>
              resume
          </div>
          <img src='download.svg'></img>
        </button>
      </a>

    );
  };
  
  export default Resume;