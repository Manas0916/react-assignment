import React, {useState} from 'react'
import AvailableTitle from './AvailableTitle'
import AvailableItem from './AvailableItem'
import AvailableNav from './AvailableNav'
import useFetch from '../../hooks/useFetch';


const AvailableShifts = () => {

  const { data, loading, error } = useFetch('http://127.0.0.1:8080/shifts');
  const cities = ['Helsinki', 'Tampere', 'Turku'];
  const [selectedCity, setSelectedCity] = useState('Helsinki'); // Default to Helsinki

// Function to filter available shifts by the selected city and group them by date
const filterAndGroupAvailableShifts = (shifts, selectedCity) => {
  const cityShifts = shifts.filter((shift) => shift.area === selectedCity && !shift.booked);
  const groupedShifts = cityShifts.reduce((grouped, shift) => {
    const date = new Date(shift.startTime).toDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(shift);
    return grouped;
  }, {});
  return groupedShifts;
};

// Filter and group available shifts for the selected cities
const groupedAvailableShifts = filterAndGroupAvailableShifts(data, selectedCity);

  return (
    <div className='container'>
    <ul className="list-group d-flex mx-4 shadow">
      <AvailableNav cities={cities} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {Object.entries(groupedAvailableShifts).map(([date, shifts]) => (
        <React.Fragment key={date}>
          <AvailableTitle date={date} shiftsCount={shifts.length} />
            {shifts
              .sort((a, b) => a.startTime === b.startTime ? a.endTime - b.endTime : a.startTime - b.startTime) // Sort shifts by startTime
              .map((shift) => (
                <AvailableItem key={shift.id} shift={shift} />
            ))}
        </React.Fragment>
      ))}
    </ul>
  </div>
  )
}

export default AvailableShifts;
