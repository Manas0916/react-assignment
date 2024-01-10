import React, {useState, useEffect} from 'react'
import axios from 'axios';
import spinner from '../../assets/spinner_green.svg';
import { useNavigate } from "react-router-dom";

const AvailableItem = ({shift, bookedShifts}) => {
  
  const [isBooked, setIsBooked] = useState(shift.booked);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  const startTimestamp = shift.startTime;
  const endTimestamp = shift.endTime;
  const starttime = new Date(startTimestamp);
  const endTime = new Date(endTimestamp);
  const startHours = starttime.getHours();
  const startMinutes = starttime.getMinutes();
  const endHours = endTime.getHours();
  const endMinutes = endTime.getMinutes();

  const [overlappingShiftExists, setOverlappingShiftExists] = useState(false);
  
  useEffect(() => {
    setIsBooked(shift.booked);
    const overlapping = bookedShifts.some((s) => s.booked && s.startTime < shift.endTime && s.endTime > shift.startTime);
    setOverlappingShiftExists(overlapping);
  }, [bookedShifts, shift.booked, shift.endTime, shift.startTime]);


  const handleBookClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`http://127.0.0.1:8080/shifts/${shift.id}/book`);

      if (response.status === 200) {
        setIsBooked(true);
        navigate("/shifts");
      } else {
        console.error('Failed to book shift:', response.statusText);
      }
    } catch (error) {
      console.error('Error during booking:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
        <ul className='list-unstyled d-flex flex-column'>
            <li className='d-flex justify-content-start time'>{startHours}:{startMinutes !== 0 ? startMinutes: '00'} - {endHours}:{endMinutes !== 0 ? endMinutes : '00'}</li> 
        </ul>
        {
          overlappingShiftExists && <span className='Overlapping'>Overlapping</span>
        }
        <button type='button' className={`btn button ${isBooked || overlappingShiftExists ? 'btn-outline-secondary' : 'btn-outline-success'} fw-semibold rounded-pill`}
        onClick={isBooked ? null : handleBookClick} 
        disabled={isBooked || overlappingShiftExists} 
        >
        {isLoading ? (
          <img src={spinner} alt="Loading" style={{ height: '1.5em', marginRight: '0.5em' }} />
        ) : (
          isBooked ? 'Booked' : 'Book'
        )}
      </button>
    </li>
  )
}

export default AvailableItem;