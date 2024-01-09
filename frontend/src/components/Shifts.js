import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

const Shifts = () => {
  return (
    <Container>
      <ListGroup className='card' variant="flush">
        <ListGroup.Item >Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default Shifts
