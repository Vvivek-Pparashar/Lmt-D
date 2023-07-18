import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../../node_modules/react-calendar/dist/Calendar.css';

const CustomTileContent = () => {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (date) => {
    setDateState(date);
  };

  const calendarStyle = {
    backgroundColor: 'white',
    color: 'black',
  };

  const customTileClassNames = ({ activeStartDate, date, view }) => {
    if (view === 'month' && date.getMonth() === activeStartDate.getMonth() && date.getDate() === dateState.getDate()) {
      return 'react-calendar__tile--active custom-tile';
    }
    return 'custom-tile';
  };

  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
        tileClassName={customTileClassNames}
        tileContent={null}
        style={calendarStyle}
      />
    </>
  );
};

export default CustomTileContent;
