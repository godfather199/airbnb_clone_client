import {FooterDates, HeaderDates} from '../'
import { forwardRef, useEffect, useState } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { enIN as enINLocale } from 'date-fns/locale';
import './AirbnbDatePicker.css'
import { Menu, MenuItem, Modal } from '@mui/material';
import { addDays, eachDayOfInterval } from 'date-fns';
import { useSelector } from 'react-redux';
import { useBookedDates } from '../../hooks/useBookedDates';


// const disabledRanges2 = [
//   { startDate: new Date(2024, 2, 18), endDate: new Date(2024, 2, 21) },
//   { startDate: new Date(2024, 2, 27), endDate: new Date(2024, 2, 29) }
// ];



function BookingDatesModal({
  dateRange,
  setDateRange,
  anchorEl,
  handle_Close_Calendar
}) {
  const {property} = useSelector(state => state.property)

  const [startDate, endDate] = dateRange;

  const disabledRanges = useBookedDates(property?.bookings)

  // const [disabledRanges, setDisabledRanges] = useState()
  const [disablePreviousDates, setDisablePreviousDates] = useState(new Date())
  const [disableUpcomingDates, setDisableUpcomingDates] = useState()
  
  // console.log('Property: ', property)
  // console.log('Disable previous dates: ', disablePreviousDates)
  // console.log('Start Date: ', startDate)
  // console.log('End Date: ', endDate)
  // console.log('Date Range: ', dateRange)
  console.log('Disabled Ranges: ', disabledRanges)
  

  // Calculate dates to be disabled
  // useEffect(() => {
  //   setDisabledRanges(useBookedDates(property?.bookings))
  // }, [property?.bookings]);



  // Disable previous & upcoming date ranges based on booked dates
  useEffect(() => {
    // console.log('Start date: ', startDate)

    if(startDate) {
      setDisablePreviousDates(startDate)

      const date_To_Disable = disabledRanges.find(
        (range) => startDate <= range?.startDate
      );

      // console.log('Date to disable: ', date_To_Disable?.startDate)
      setDisableUpcomingDates(date_To_Disable?.startDate)
    }
    
  }, [startDate])


  // Close menu after dates are filled
  useEffect(() => {
    if(dateRange[0] && dateRange[1]) {
      handle_Close_Calendar()
    }

  }, [dateRange])


  const handle_Date_Change = (value) => {
    setDateRange(value);

  };

  
  // Function to generate an array of disabled dates between the specified ranges
  const generateDisabledDates = (ranges) => {
    let disabledDates = [];

    ranges?.forEach(range => {
      const dates = eachDayOfInterval({ start: range.startDate, end: range.endDate });
      disabledDates = [...disabledDates, ...dates];
    });
    
    return disabledDates;
  };




  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        // open={true}
        open={Boolean(anchorEl)}
        onClose={handle_Close_Calendar}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock={true}
        PaperProps={{
          style: {
            padding: "0.7rem", // Adjust padding as needed
            borderRadius: "0.8rem", // Adjust border radius as needed
          },
        }}
      >
        {/* Header */}
        <MenuItem
          style={{ backgroundColor: "transparent" }}
          className="h-[6rem]"
          disableRipple
          // onClick={handle_Close_Calendar}
        >
          <HeaderDates
            dateRange={dateRange}
            handle_Date_Change={handle_Date_Change}
          />
        </MenuItem>

        {/* Calendar */}
        <MenuItem
          style={{ marginTop: "1rem" }}
          disableRipple
          className="h-[21rem] flex justify-center"
        >
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => handle_Date_Change(update)}
            isClearable={true}
            inline
            monthsShown={2}
            dateFormat="dd/MM/yyyy"
            excludeDates={generateDisabledDates(disabledRanges)}
            // excludeDates={generateDisabledDates(disabledRanges, startDate || endDate)} // GPT code 
            // excludeDates={generateDisabledDates(startDate, disabledRanges)} // Gemini code
            minDate={disablePreviousDates}
            maxDate={disableUpcomingDates}
          />
        </MenuItem>

        {/* Footer */}
        <MenuItem disableRipple className="h-[3rem]">
          <div
            // style={{ border: "3px solid orange" }}
            // className="absolute top-[62.5rem] right-[1rem]"
            className="w-full flex justify-end"
          >
            <FooterDates
              handle_Date_Change={handle_Date_Change}
              handle_Close_Calendar={handle_Close_Calendar}
              setDisablePreviousDates = {setDisablePreviousDates}
              setDisableUpcomingDates = {setDisableUpcomingDates}
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default BookingDatesModal


