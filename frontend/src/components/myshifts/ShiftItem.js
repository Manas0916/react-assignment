import React from 'react'


const ShiftItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
        <ul className='list-unstyled d-flex flex-column'>
        <li className='d-flex justify-content-start time'>12:00 - 14:00</li> 
        <li className='d-flex justify-content-start city'>Helinski</li>
        </ul>
        <button type='button' className='btn btn-outline-danger fw-semibold rounded-pill'>Cancel</button>
    </li>
  )
}

export default ShiftItem;
