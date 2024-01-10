import React, {useState, useEffect} from 'react';
import '../../App.css';
import ShiftItem from './ShiftItem';
import ShiftTitle from './ShiftTitle';
import useFetch from '../../hooks/useFetch';

const Shifts = () => {

  const {data, loading, error} = useFetch('http://127.0.0.1:8080/shifts');
  const [shiftsData, setShiftsData] = useState([]);

  useEffect(() => {
    // Update the state variable when data changes
    setShiftsData(data);
  }, [data]); // Trigger the effect when data changes


  // Function to group shifts by date
  const groupShiftsByDate = (shifts) => {
    // console.log(shifts);
    return shifts.reduce((groupedShifts, shift) => {
      const date = new Date(shift.startTime).toDateString();
      // console.log(date);
      if (!groupedShifts[date]) {
        groupedShifts[date] = { shifts: [], totalHours: 0 };
      }
      groupedShifts[date].shifts.push(shift);
      groupedShifts[date].totalHours += (shift.endTime - shift.startTime) / (1000 * 60 * 60); // Calculate hours
      return groupedShifts;
    }, {});
  };

  // Function to filter booked shifts
  const filterBookedShifts = (shifts) => shifts.filter((shift) => shift.booked);

  // Filter and group booked shifts
  const bookedShifts = filterBookedShifts(shiftsData);
  const groupedBookedShifts = groupShiftsByDate(bookedShifts);
  // console.log(bookedShifts);
  // console.log(groupedBookedShifts);

  return (
    <div className='container'>
      <ul className="list-group d-flex mx-4 shadow ">
      {Object.entries(groupedBookedShifts).map(([date, shiftsGroup]) => (
          <React.Fragment key={date}>
            <ShiftTitle date={date} shiftsCount={shiftsGroup.shifts.length} totalHours={shiftsGroup.totalHours} />
            {shiftsGroup.shifts.map((shift) => (
              <ShiftItem key={shift.id} shift={shift} />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Shifts;