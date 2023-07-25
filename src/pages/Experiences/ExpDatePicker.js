import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { ExpDatePickWrap } from './ExDetailStyle';


export default function BasicRangeShortcuts() {
  return (
    <ExpDatePickWrap>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <StaticDateRangePicker
        slotProps={{
          actionBar: { actions: [] },
        }}
        calendars={2}
      /> */}
      <StaticDateRangePicker
        slotProps={{
          actionBar: { actions: [] },
        }}
        calendars={2}
      />
    </LocalizationProvider>
    </ExpDatePickWrap>
  );
}
