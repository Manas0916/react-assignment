import React, {useState, useEffect} from 'react'
import axios from 'axios';

const AvailableItem = ({shift}) => {
  
  const [isBooked, setIsBooked] = useState(shift.booked);

  const startTimestamp = shift.startTime;
  const endTimestamp = shift.endTime;
  const starttime = new Date(startTimestamp);
  const endTime = new Date(endTimestamp);
  const startHours = starttime.getHours();
  const startMinutes = starttime.getMinutes();
  const endHours = endTime.getHours();
  const endMinutes = endTime.getMinutes();

  useEffect(() => {
    // Check if the shift is already booked
    setIsBooked(shift.booked);
  }, [shift.booked]);


  const handleBookClick = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:8080/shifts/${shift.id}/book`);
  
      if (response.status === 200) {
        // Update the state to mark the shift as booked
        setIsBooked(true);
      } else {
        // Handle error if needed
        console.error('Failed to book shift:', response.statusText);
      }
    } catch (error) {
      console.error('Error during booking:', error.message);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
        <ul className='list-unstyled d-flex flex-column'>
            <li className='d-flex justify-content-start time'>{startHours}:{startMinutes !== 0 ? startMinutes: '00'} - {endHours}:{endMinutes !== 0 ? endMinutes : '00'}</li> 
        </ul>
        <button type='button' className={`btn ${isBooked ? 'btn-outline-secondary' : 'btn-outline-danger'} fw-semibold rounded-pill`}
        onClick={isBooked ? null : handleBookClick} // Disable the button if already booked
        disabled={isBooked} // Disable the button if already booked 
        >
        {isBooked ? 'Booked' : 'Book'}
      </button>
    </li>
  )
}

export default AvailableItem;
