import Nav from 'react-bootstrap/Nav';
import '../App.css';

function Navbar() {
  return (
    <Nav className='nav'>
        <Nav.Item className='nav-item'>
            <Nav.Link className='Nav-link' href="/shifts" active={window.location.pathname === "/shifts"}>My Shifts</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav-item'>
            <Nav.Link className='Nav-link' href='/availableshifts' active={window.location.pathname === "/availableshifts"}>Available Shifts</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default Navbar;