// import React, { useState } from 'react';
// import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

// const DateRange = ({ isCheckInDate, isCheckOutDate }) => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: 'selection',
//     },
//   ]);
//   console.log('item', state.selection);

//   return (
//     <div>
//       <DateRangePicker
//         onChange={(item) => setState([item.selection])}
//         moveRangeOnFirstSelection={false}
//         months={2}
//         ranges={state}
//         direction='horizontal'
//       />
//     </div>
//   );
// };

// export default DateRange;
