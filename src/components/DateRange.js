// import React, { Component } from 'react';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
// import './styles.css';

// class DateRange extends Component {
//   state = {
//     startDate: null,
//     endDate: null,
//     focusedInput: null,
//   };

//   handleDateChange = ({ startDate, endDate }) =>
//     this.setState({ startDate, endDate });

//   handleFocusChange = (focusedInput) => this.setState({ focusedInput });

//   render = () => (
//     // <DateRangePicker
//     //   endDate={this.state.endDate}
//     //   endDateId='endDate'
//     //   focusedInput={this.state.focusedInput}
//     //   isOutsideRange={() => null}
//     //   onDatesChange={this.handleDateChange}
//     //   onFocusChange={this.handleFocusChange}
//     //   startDate={this.state.startDate}
//     //   startDateId='startDate'
//     // />
//     <DateRangePicker
//       startDateId='startDate'
//       endDateId='endDate'
//       startDate={this.state.startDate}
//       endDate={this.state.endDate}
//       onDatesChange={({ startDate, endDate }) => {
//         this.setState({ startDate, endDate });
//       }}
//       focusedInput={this.state.focusedInput}
//       onFocusChange={(focusedInput) => {
//         this.setState({ focusedInput });
//       }}
//     />
//   );
// }

// export default DateRange;

import React, { useState } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const DateRange = ({ isCheckInDate, isCheckOutDate }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  console.log('item', state.selection);

  return (
    <div>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction='horizontal'
      />
    </div>
  );
};

export default DateRange;
