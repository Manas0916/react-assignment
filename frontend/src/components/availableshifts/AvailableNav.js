import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const AvailableNav = () => {

    const [activeLink, setActiveLink] = useState('/city1');
    const handleLinkClick = (to) => {
        setActiveLink(to);
      };

  return (
    <div className="container justify-content-center">
        <ul className='list-unstyled d-flex justify-content-between ms-5 me-5 my-3' style={{color: "#004FB4"}}>
            <Link className={activeLink === '/city1' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/city1')}>
                Helinski
            </Link>
            <Link className={activeLink === '/city2' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/city2')}>
                Tampere
            </Link>
            <Link className={activeLink === '/city3' ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick('/city3')}>
                Turku
            </Link>
        </ul>
    </div>
    
  )
}

export default AvailableNav
