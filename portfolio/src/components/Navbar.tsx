import { useState, useEffect } from 'react';
import './Navbar.css'

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let aboutOffset: any = 0;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let experienceOffset: any = 0;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let projectsOffset: any = 0;

          aboutOffset = document.getElementById('about')?.offsetTop;
          experienceOffset = document.getElementById('experience')?.offsetTop;
          projectsOffset = document.getElementById('projects')?.offsetTop;
    
          const scrollPosition = window.scrollY;
    
          if (scrollPosition < aboutOffset - 50) {
            setActiveSection(null);
          } else if (scrollPosition < experienceOffset - 150) {
            setActiveSection('about');
          } else if (scrollPosition < projectsOffset - 1) {
            setActiveSection('experience');
          } else {
            setActiveSection('projects');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
      <div className='navbar'>
        <div className='nav-left'>
            <img width="45px" src='tian.png'></img>
            <img width="40px" src='hui.png'></img>
        </div>
        <div className='nav-right'>
            <ul className='nav-list'>
                <li className={activeSection === 'about' ? 'active' : ''}>
                    <a href="#about">about</a>
                </li>
                <li className={activeSection === 'experience' ? 'active' : ''}>
                    <a href="#experience">experience</a>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                    <a href="#projects">projects</a>
                </li>
            </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;