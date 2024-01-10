import React from 'react'


const ShiftItem = ({shift}) => {

  const startTimestamp = shift.startTime;
  const endTimestamp = shift.endTime;
  const starttime = new Date(startTimestamp);
  const endTime = new Date(endTimestamp);
  const startHours = starttime.getHours();
  const startMinutes = starttime.getMinutes();
  const endHours = endTime.getHours();
  const endMinutes = endTime.getMinutes();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
        <ul className='list-unstyled d-flex flex-column'>
        <li className='d-flex justify-content-start time'>{startHours}:{startMinutes !== 0 ? startMinutes: '00'} - {endHours}:{endMinutes !== 0 ? endMinutes : '00'}</li> 
        <li className='d-flex justify-content-start city'>{shift.area}</li>
        </ul>
        <button type='button' className='btn btn-outline-danger fw-semibold rounded-pill'>Cancel</button>
    </li>
  )
}

export default ShiftItem;
