import React from 'react'

const ShiftTitle = () => {
  return (
    <li className="list-group-item justify-content-start d-flex align-items-center rounded-top-3" style={{background: '#F1F4F8', color: '#4F6C92'}}>
        <span className='fw-semibold title'>Today</span>
        <span className='ms-3 subtitle fw-semibold'>2 shifts, 4 h</span>
    </li>
  )
}

export default ShiftTitle
