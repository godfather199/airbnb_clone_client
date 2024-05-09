import CloseIcon from '@mui/icons-material/Close';
import { differenceInCalendarDays, parse } from 'date-fns';


function BookingAmount({dateRange, cost, guests, stripeSuccess}) {
  const [startDate, endDate] = dateRange;
  // console.log('Date range: ', dateRange)


  const calculate_Days = () => {
    if(stripeSuccess) {
      const dateFormat = 'dd/MM/yyyy'

      const date1 = parse(startDate, dateFormat, new Date())
      const date2 = parse(endDate, dateFormat, new Date())

      return differenceInCalendarDays(date2, date1) + 1
    }

    return (differenceInCalendarDays(endDate, startDate) + 1)
  }



  return (
    <div
      // style={{ border: "3px solid green" }}
      // className= {`border-2 border-red-600 w-[21rem] md:w-[24rem] h-[20rem] flex flex-col gap-6 p-6 rounded-lg shadow-lg`}
      className={`border-2 border-red-600  flex flex-col  rounded-lg shadow-lg ${
        stripeSuccess
          ? "w-[21rem] md:w-[24rem] h-[20rem] gap-6 p-6"
          : " border-4  bg-red-100 w-[25rem] md:w-[25rem] h-[12.5rem] gap-7 p-5 shadow-xl mb-3"
      } `}
    >
      {/* Guests */}
      {stripeSuccess && (
        <div className="flex flex-col  justify-between text-lg text-gray-700 border border-black p-3 rounded-lg shadow-lg">
          <div className="">
            <span className=" ">Total Guests</span>
          </div>

          <div className=" text-sm w-[10rem] flex items-center justify-between ">
            <span className="">Adults:</span>
            <span className="">{guests?.adults}</span>
          </div>

          <div className="w-[10rem] text-sm flex items-center justify-between">
            <span className="">Children:</span>
            <span className="">{guests?.children}</span>
          </div>
        </div>
      )}

      {/* nights * cost */}
      <div className="flex items-center justify-between text-lg text-gray-700 ">
        <div
          // style={{ border: "2px solid orange" }}
          className="w-[11rem] flex items-center justify-between border border-b-gray-700 border-r-0 border-l-0 border-t-0 text-md "
        >
          <span className="">{`₹${cost
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
          <CloseIcon style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className="">{`${calculate_Days()} nights`}</span>
        </div>

        <div className="">
          <span className="">{`₹${(calculate_Days() * cost)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
        </div>
      </div>

      {/* Airbnb cost */}
      <div className="flex items-center justify-between  text-gray-700 ">
        <div
          // style={{ border: "2px solid orange" }}
          className="w-[11rem] flex items-center justify-between border border-b-gray-700 border-r-0 border-l-0 border-t-0  "
        >
          <span className="text-lg">Airbnb Service Fees</span>
        </div>

        <div className="">
          <span className="text-lg">₹1,200</span>
        </div>
      </div>

      {/* Total price */}
      <div className="flex items-center justify-between text-lg text-gray-700 ">
        <div
          // style={{ border: "2px solid orange" }}
          className="w-[3rem] flex items-center justify-between border border-b-gray-700 border-r-0 border-l-0 border-t-0 "
        >
          <span className="">Total</span>
        </div>

        <div className="">
          <span className="">{`₹${(calculate_Days() * cost + 1200)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
        </div>
      </div>
    </div>
  );
}

export default BookingAmount