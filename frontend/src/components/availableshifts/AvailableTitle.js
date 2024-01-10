import React from 'react'

const AvailableTitle = ({date, shiftsCount}) => {
  return (
    <li className="list-group-item justify-content-start d-flex align-items-center" style={{background: '#F1F4F8', color: '#4F6C92'}}>
        <span className='fw-semibold title'>{date}</span>
        <span className='ms-3 subtitle fw-semibold'>{shiftsCount} shifts</span>
    </li>
  )
}
export default AvailableTitle
