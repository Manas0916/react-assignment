import React, {useState} from 'react';
import axios from 'axios';
import spinner from '../../assets/spinner_red.svg';


function ShiftItem({ shift }) {

  const [isCanceling, setIsCanceling] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const startTimestamp = shift.startTime;
  const endTimestamp = shift.endTime;
  const starttime = new Date(startTimestamp);
  const endTime = new Date(endTimestamp);
  const startHours = starttime.getHours();
  const startMinutes = starttime.getMinutes();
  const endHours = endTime.getHours();
  const endMinutes = endTime.getMinutes();


  const handleCancel = async () => {
    try {
      setIsCanceling(true);
      setLoading(true);
      await axios.post(`http://127.0.0.1:8080/shifts/${shift.id}/cancel`);
      
      setIsCanceling(true);
      setLoading(false);
    } catch (error) {
      console.error('Error during canceling:', error);
      
    }
  };


  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
      <ul className='list-unstyled d-flex flex-column'>
        <li className='d-flex justify-content-start time'>{startHours}:{startMinutes !== 0 ? startMinutes : '00'} - {endHours}:{endMinutes !== 0 ? endMinutes : '00'}</li>
        <li className='d-flex justify-content-start city'>{shift.area}</li>
      </ul>
      <button type='button' className='btn btn-outline-danger fw-semibold rounded-pill' onClick={handleCancel} disabled={isCanceling}>
        {isLoading ? 
        <img src={spinner} alt="Loading spinner" className='red-spinner' style={{ height: '1.5em', marginRight: '0.5em' }}/> 
        : 'Cancel'}
      </button>
    </li>
  );
}

export default ShiftItem;
