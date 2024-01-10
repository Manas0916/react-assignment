import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const AvailableNav = ({cities,selectedCity, setSelectedCity}) => {

    const [activeLink, setActiveLink] = useState(`${selectedCity}`);
    const handleLinkClick = (to) => {
        setActiveLink(to);
        setSelectedCity(to);
      };

  return (
    <div className="container justify-content-center">
        <ul className='list-unstyled d-flex justify-content-between ms-5 me-5 my-3' style={{color: "#004FB4"}}>
            <Link className={activeLink === `${cities[0]}` ? 'nav-link active' : 'nav-link'}  onClick={() => handleLinkClick(`${cities[0]}`)}>
                Helsinki
            </Link>
            <Link className={activeLink === `${cities[1]}` ? 'nav-link active' : 'nav-link'}  onClick={() => handleLinkClick(`${cities[1]}`)}>
                Tampere
            </Link>
            <Link className={activeLink === `${cities[2]}` ? 'nav-link active' : 'nav-link'}  onClick={() => handleLinkClick(`${cities[2]}`)}>
                Turku
            </Link>
        </ul>
    </div>
    
  )
}

export default AvailableNav;
