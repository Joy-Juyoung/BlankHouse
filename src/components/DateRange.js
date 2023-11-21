import React, { useEffect, useState } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const DateRange = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  roomInfo,
}) => {
  const today = new Date(); // get today's date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // Add 1 to today's date and set it to tomorrow

  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ]);
  const disabledDates = [];

  useEffect(() => {
    setCheckInDate(
      selectedDateRange[0]?.startDate?.toLocaleDateString('en-CA')
    );
    setCheckOutDate(selectedDateRange[0]?.endDate?.toLocaleDateString('en-CA'));
  }, [selectedDateRange]);

  return (
    <div>
      <DateRangePicker
        onChange={(item) => setSelectedDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={selectedDateRange}
        direction='horizontal'
        minDate={tomorrow}
        disabledDates={disabledDates}
      />
    </div>
  );
};

export default DateRange;
