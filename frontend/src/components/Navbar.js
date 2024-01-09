import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
        <Link className="nav-link active " to='/shifts' active={window.location.pathname === "/shifts"}>My Shifts</Link>
        <Link className="nav-link" to='/availableshifts' active={window.location.pathname === "/availableshifts"}>Available Shifts</Link>
    </nav>
  );
}

export default Navbar;