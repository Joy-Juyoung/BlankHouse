import React, { useEffect, useState } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux';
import { bookedInfoByIdAsync, bookedRoom } from '../redux/slices/roomSlice';
import { useParams } from 'react-router-dom';

const SideDateRange = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  // roomId,
}) => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const [dateList, setDateList] = useState([]);
  const [bookedDate, setBookedDate] = useState([]);
  const [bookedCheckIn, setBookedCheckIn] = useState([]);
  const [bookedCheckOut, setBookedCheckOut] = useState([]);
  const today = new Date(); // get today's date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // Add 1 to today's date and set it to tomorrow
  const dateObjects = dateList?.map((dateString) => new Date(dateString));

  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: addDays(new Date(), 1) || new Date(checkInDate),
      endDate: addDays(new Date(), 5) || new Date(checkOutDate),
      key: 'selection',
    },
  ]);

  const bookedRoomList = useSelector(bookedRoom);

  useEffect(() => {
    setCheckInDate(
      selectedDateRange[0]?.startDate?.toLocaleDateString('en-CA')
    );
    setCheckOutDate(selectedDateRange[0]?.endDate?.toLocaleDateString('en-CA'));
  }, [selectedDateRange]);

  useEffect(() => {
    dispatch(bookedInfoByIdAsync({ roomId }));
    if (Array.isArray(bookedRoomList)) {
      setBookedDate(
        bookedRoomList?.map((booked) => ({
          bookedIn: booked?.check_in,
          bookedOut: booked?.check_out,
        }))
      );
    }
  }, [dispatch, roomId]);

  // console.log('Booked', bookedDate);

  useEffect(() => {
    const dateArray = [];

    if (Array.isArray(bookedDate)) {
      bookedDate.forEach(({ bookedIn, bookedOut }) => {
        const checkin = new Date(bookedIn);
        const checkout = new Date(bookedOut);
        // To get a date one day before the bookedOut date
        checkout.setDate(checkout.getDate() - 1);

        // console.log('checkin', bookedIn);
        if (!isNaN(checkin.getTime()) && !isNaN(checkout.getTime())) {
          let currentDate = new Date(checkin);

          while (currentDate <= checkout) {
            dateArray.push(currentDate.toISOString().split('T')[0]);
            currentDate.setDate(currentDate.getDate() + 1);
          }
        }
      });
    }

    if (dateArray.length === 0) {
      dateArray.push('Invalid date format');
    }

    setDateList(dateArray);
  }, [checkInDate, checkOutDate, bookedDate, roomId]);

  // console.log('item', Number(checkOutDate - checkInDate));
  // console.log('roomId', roomId);
  // console.log('dateList', dateList);

  return (
    <div>
      <DateRangePicker
        onChange={(item) => setSelectedDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={selectedDateRange}
        direction='horizontal'
        minDate={tomorrow}
        disabledDates={dateObjects}
      />
    </div>
  );
};

export default SideDateRange;
