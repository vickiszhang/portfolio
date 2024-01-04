
import './About.css'

const About: React.FC = () => {
  return (
    <div id="about" className='main'>
      <div className="about">
        <div>
          <img width="50px" src='github.svg'></img>
          <img width="50px" src='linkedin.svg'></img>
          <img width="50px" src='email.svg'></img>
        </div>
        <div className='name'>
          <h1>vicki&nbsp;&nbsp;zhang</h1>
        </div>
        <div className='description'>
          <div className='photo'>
            photo
          </div>
          <div className='bio'>
            <p>
              I am a student majoring in computer science and statistics at UBC.
              ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default About;