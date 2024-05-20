
import PhotoViewer from '../components/PhotoViewer';
import './About.css'

const About: React.FC = () => {
  return (
    <div id="about" className='main'>
      <div className="about">
        <div className='socials-outer'>
          <div className='socials'>
            <a href="https://github.com/vickiszhang" target="_blank" rel="noopener noreferrer">
              <img width="40px" src='github.svg'></img>
            </a>
            <a href="https://linkedin.com/in/vickiszhang" target="_blank" rel="noopener noreferrer">
              <img width="40px" src='linkedin.svg'></img>
            </a>
            <a href="mailto:vickiszhang@gmail.com">
              <img width="40px" src='email.svg'></img>
            </a>
          </div>
        </div>
  
        <div className='name'>
          <h1>vicki&nbsp;&nbsp;zhang</h1>
        </div>
        <div className='description'>
          <div className='photo'>
            <PhotoViewer/>
          </div>
          <div className='bio'>
            <p>
              I am currently a 4th student majoring in computer science and statistics at UBC. I anticipate graduating by May 2025. 
              I am working to develop my skills as a software developer through creating personal projects and interships.

              Nowadays I am working on the mobile view for this website :') and experimenting with computer vision. 

              I am looking to pivot more towards backend development or game development.

              In my free time I like to go to the gym, play games, ice skating, but most often binging reality tv shows.

              Check out my portfolio below!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default About;