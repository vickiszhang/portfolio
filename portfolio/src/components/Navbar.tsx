import { useState, useEffect } from 'react';
import './Navbar.css'

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
          const aboutOffset = document.getElementById('about')?.offsetTop;
          const experienceOffset = document.getElementById('experience')?.offsetTop;
          const projectsOffset = document.getElementById('projects')?.offsetTop;
    
          const scrollPosition = window.scrollY;
    
          if (scrollPosition < aboutOffset - 50) {
            setActiveSection(null);
          } else if (scrollPosition < experienceOffset - 150) {
            setActiveSection('about');
          } else if (scrollPosition < projectsOffset - 150) {
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
            <img width="55px" src='tian.png'></img>
            <img width="50px" src='hui.png'></img>
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