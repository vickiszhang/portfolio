import './Navbar.css'

const Navbar: React.FC = () => {
    return (
      <div className='navbar'>
        <div className='nav-left'>
            <img width="55px" src='tian.png'></img>
            <img width="50px" src='hui.png'></img>
        </div>
        <div className='nav-right'>
            <ul className='nav-list'>
                <li>about</li>
                <li>experience</li>
                <li>projects</li>
            </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;