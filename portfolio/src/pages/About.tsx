
import './About.css'

const About: React.FC = () => {
  return (
    <div id="about" className='main'>
      <div className="about">
        <div>
          <a href="https://github.com/vickiszhang" target="_blank" rel="noopener noreferrer">
            <img width="50px" src='github.svg'></img>
          </a>
          <a href="https://linkedin.com/in/vickiszhang" target="_blank" rel="noopener noreferrer">
            <img width="50px" src='linkedin.svg'></img>
          </a>
          <a href="mailto:vickiszhang@gmail.com">
            <img width="50px" src='email.svg'></img>
          </a>
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
              I am currently a 4th student majoring in computer science and statistics at UBC. 
              I am working to develop my skills as a software developer through creating personal projects and 


              ...

              I like to spend my time playing video games, going to the gym, and ice skating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default About;