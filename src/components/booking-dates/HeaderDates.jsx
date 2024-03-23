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
      className=" w-[38rem] h-[5rem] flex justify-between"
    >
      <div className="flex flex-col">
        <span className="  text-xl font-semibold text-gray-700">
          {dateRange[0] && dateRange[1]
            ? `${differenceInCalendarDays(endDate, startDate) + 1} nights`
            : "Select dates"}
        </span>
        <span
          className={`${
            dateRange[0] && dateRange[1] ? "text-sm mt-2" : "text-md"
          } font-extralight text-gray-400`}
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
          // style={{ border: "3px solid orange" }}
          className={`border ${
            dateRange[0] === null || dateRange[0] === undefined
              ? "border-[3px] border-black"
              : "border-gray-400"
          }  flex w-[9rem] h-[3.8rem] p-2 rounded-lg relative`}
        >
          <div className="flex flex-col items-center justify-center gap-0.7">
            <span className="text-xs font-semibold">CHECK-IN</span>
            <input
              type="text"
              value={
                startDate
                  ? format(startDate, "dd/MM/yyyy", { locale: enINLocale })
                  : ""
              }
              onChange={() => {}}
              placeholder="Add date"
              className=" ml-5 outline-none w-[5rem] bg-white"
              disabled={true}
            />
          </div>
          {startDate && (
            <CloseIcon
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "1.2rem",
                right: "0.4rem",
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
          }  flex w-[9rem] h-[3.8rem] p-2 rounded-lg relative`}
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
              className="ml-5 outline-none w-[5rem] "
            />
          </div>
          {endDate && (
            <CloseIcon
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "1.2rem",
                right: "0.4rem",
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