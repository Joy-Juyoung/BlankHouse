import React, { useEffect, useState } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const SideDateRange = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  roomInfo,
}) => {
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const disabledDates = [
    addDays(new Date(), 10),
    addDays(new Date(), 8),
    addDays(new Date(), 22),
    addDays(new Date(), 20),
  ];

  useEffect(() => {
    setCheckInDate(
      selectedDateRange[0]?.startDate?.toLocaleDateString('en-CA')
    );
    setCheckOutDate(selectedDateRange[0]?.endDate?.toLocaleDateString('en-CA'));
  }, [selectedDateRange]);

  // console.log('item', Number(checkOutDate - checkInDate));
  // console.log('checkInDate', checkInDate);
  // console.log('checkOutDate', checkOutDate);

  return (
    <div>
      <DateRangePicker
        onChange={(item) => setSelectedDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={selectedDateRange}
        direction='horizontal'
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </div>
  );
};

export default SideDateRange;
