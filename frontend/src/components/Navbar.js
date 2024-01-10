import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/shifts');

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <div className='container d-flex'>
    <nav className='nav text-start'>
      <Link className={activeLink === '/shifts' ? 'nav-link active' : 'nav-link'} to='/shifts' onClick={() => handleLinkClick('/shifts')}>
        My Shifts
      </Link>
      <Link className={activeLink === '/availableshifts' ? 'nav-link active' : 'nav-link'} to='/availableshifts' onClick={() => handleLinkClick('/availableshifts')}>
        Available Shifts
      </Link>
    </nav>
    </div>
  );
};

export default Navbar;