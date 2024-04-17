import {BookingDatesModal} from '../../../components'
import { useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { format } from 'date-fns';
import { enIN as enINLocale } from 'date-fns/locale'



function CheckInOut({
  dateRange,
  setDateRange,
  anchorEl,
  handle_Open_Calendar,
  handle_Close_Calendar,
}) {
  // const [anchorEl, setAnchorEl] = useState(null);

  const [startDate, endDate] = dateRange;
  // const open = Boolean(anchorEl);

  // const handle_Open_Calendar = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handle_Close_Calendar = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className="">
      <div className="flex cursor-pointer" onClick={handle_Open_Calendar}>
        {/* Check-in */}
        <div className="w-[10rem] flex flex-col items-center justify-center border border-gray-500 p-3 rounded-bl-lg ">
          <span className="text-xs font-semibold text-gray-600">CHECK-IN</span>
          <span className="text-sm font-light text-gray-500">
            <input
              // style={{border: '3px solid red'}}
              type="text"
              placeholder="Add date"
              disabled
              className="outline-none bg-white w-[6rem]  ml-6"
              value={
                startDate
                  ? format(startDate, "dd/MM/yyyy", { locale: enINLocale })
                  : ""
              }
            />
          </span>
        </div>

        {/* Check-out */}
        <div className="w-[10rem] flex flex-col items-center justify-center border border-gray-500 p-3 rounded-br-lg ">
          <span className="text-xs font-semibold text-gray-600">CHECKOUT</span>
          <span className="text-sm font-light text-gray-500">
            <input
              type="text"
              placeholder="Add date"
              className="outline-none bg-white w-[6rem] ml-6 cursor-pointer"
              disabled
              value={
                endDate
                  ? format(endDate, "dd/MM/yyyy", { locale: enINLocale })
                  : ""
              }
            />
          </span>
        </div>
      </div>

      {/* Calendar */}
      <BookingDatesModal
        dateRange={dateRange}
        setDateRange={setDateRange}
        anchorEl={anchorEl}
        handle_Close_Calendar={handle_Close_Calendar}
      />
    </div>
  );
}

export default CheckInOut