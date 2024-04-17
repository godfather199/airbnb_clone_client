import { differenceInCalendarDays, format } from 'date-fns';
import { enIN as enINLocale } from 'date-fns/locale'
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


function HeaderDates({ handle_Date_Change, dateRange }) {

  const [startDate, endDate] = dateRange;
  // console.log('Date Range: ', dateRange)

 
  
  return (
    <div
      // style={{ border: "3px solid purple" }}
      className=" w-[38rem] h-[5rem] flex flex-col md:flex-row  items-center justify-between gap-3"
    >
      <div className="flex flex-col">
        <span className="  text-2xl font-semibold text-gray-700">
          {dateRange[0] && dateRange[1]
            ? `${differenceInCalendarDays(endDate, startDate) + 1} nights`
            : "Select dates"}
        </span>
        <span
          className={`${
            dateRange[0] && dateRange[1] ? "text-md mt-2" : "text-md text-gray-400"
          } font-medium text-gray-500`}
        >
          {dateRange[0] && dateRange[1]
            ? `${format(dateRange[0], "dd MMM yyyy")} - ${format(
                dateRange[1],
                "dd MMM yyyy"
              )}`
            : "Add your travel dates for exact pricing"}
        </span>
      </div>

      {/* Input dates */}
      <div className="flex items-center ">
        {/* Checkin */}
        <div
          // style={{ border: "3px solid red" }}
          className={`border ${
            dateRange[0] === null || dateRange[0] === undefined
              ? "border-[3px] border-black"
              : "border-gray-400"
          }  flex w-[10rem] h-[3.8rem] p-2 rounded-lg relative`}
        >
          <div className="flex flex-col items-center justify-center gap-0.7">
            <span className="text-xs font-semibold">CHECK-IN</span>
            <input
              // style={{border: '3px solid orange'}}
              type="text"
              value={
                startDate
                  ? format(startDate, "dd/MM/yyyy", { locale: enINLocale })
                  : ""
              }
              onChange={() => {}}
              placeholder="Add date"
              className=" ml-5 outline-none w-[6rem] bg-white text-sm text-gray-500"
              disabled={true}
            />
          </div>
          {startDate && (
            <CloseIcon
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "1.2rem",
                right: "1rem",
                fontSize: "1.2rem",
              }}
              onClick={() => handle_Date_Change("")}
            />
          )}
        </div>

        {/* Checkout */}
        <div
          // style={{ border: "3px solid green" }}
          className={`border-[3px]  ${
            dateRange[0] === null || dateRange[0] === undefined
              ? "bg-gray-300 opacity-50 border-gray-500"
              : "bg-white border-black"
          }  flex w-[10rem] h-[3.8rem] p-2 rounded-lg relative`}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <span
              // className = 'text-xs font-semibold'
              className={`text-xs font-semibold ${
                dateRange[0] === null || dateRange[0] === undefined
                  ? " text-gray-500"
                  : "text-black"
              }`}
            >
              CHECKOUT
            </span>
            <input
              type="text"
              disabled
              value={
                endDate
                  ? format(endDate, "dd/MM/yyyy", { locale: enINLocale })
                  : ""
              }
              onChange={() => {}}
              placeholder="Add date"
              className="ml-5 outline-none w-[6rem] text-sm text-gray-500 "
            />
          </div>
          {endDate && (
            <CloseIcon
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "1.2rem",
                right: "1rem",
                fontSize: "1.2rem",
              }}
              onClick={() => handle_Date_Change("")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderDates