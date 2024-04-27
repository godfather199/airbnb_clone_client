import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function TripBookingDetails({checkIn, checkOut, guests, totalPrice, customerId}) {
    
  
  return (
    <div
      // style={{ border: "3px solid green" }}
      className="flex flex-col items-center gap-4 w-[25rem] md:w-full bg-gray-100 p-7 rounded-[3px] shadow-lg"
    >
      {/* Customer Info */}
      {customerId?.name && (
        <div className="flex items-center justify-center gap-2">
          {customerId?.user_Avatar?.url ? (
            <img
              src={customerId?.user_Avatar?.url}
              className="w-[2.5rem] h-[2.5rem]  rounded-full"
              alt=""
            />
          ) : (
            <AccountCircleOutlinedIcon
              style={{ width: "2rem", height: "2rem" }}
            />
          )}

          <span className="text-sm font-serif text-gray-600">{customerId?.name}</span>
        </div>
      )}

      {/* Booking details */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-mono text-gray-600">
            Check In Date: {checkIn}
          </span>
          <span className="text-sm font-mono text-gray-600">
            Check Out Date: {checkOut}
          </span>
        </div>

        <div className="">
          <span className="text-sm font-mono text-gray-600">
            Guests: {`${guests?.adults} adults & ${guests?.children} children`}
          </span>
        </div>

        <div className="">
          <span className="text-sm font-mono text-gray-600">
            Booking Amount: {totalPrice}
          </span>
        </div>
      </div>
    </div>
  );}

export default TripBookingDetails
































