import React, {useState} from 'react'
import AvailableTitle from './AvailableTitle'
import AvailableItem from './AvailableItem'
import AvailableNav from './AvailableNav'
import useFetch from '../../hooks/useFetch';


const AvailableShifts = () => {

  const { data, loading, error } = useFetch('http://127.0.0.1:8080/shifts');
  const cities = ['Helsinki', 'Tampere', 'Turku'];
  const [selectedCities, setSelectedCities] = useState(cities); // Default to all cities

 // Function to filter available shifts by areas (cities) and group them by city and date
 const filterAndGroupAvailableShifts = (shifts, selectedCities) => {
  return selectedCities.reduce((groupedShifts, city) => {
    const cityShifts = shifts.filter((shift) => shift.area === city && !shift.booked);
    const cityGroupedShifts = cityShifts.reduce((grouped, shift) => {
      const date = new Date(shift.startTime).toDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(shift);
      return grouped;
    }, {});
    groupedShifts[city] = cityGroupedShifts;
    return groupedShifts;
  }, {});
};

// Filter and group available shifts for the selected cities
const groupedAvailableShifts = filterAndGroupAvailableShifts(data, selectedCities);
console.log(groupedAvailableShifts);

  return (
    <div className='container'>
      <ul className="list-group d-flex mx-4 shadow ">
        <AvailableNav/>
        <AvailableTitle/>
        <AvailableItem/>
        <AvailableItem/>
        <AvailableItem/>
        <AvailableItem/>
      </ul>
    </div>
  )
}

export default AvailableShifts
