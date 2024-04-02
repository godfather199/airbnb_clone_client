import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function TripBookingDetails({checkIn, checkOut, guests, totalPrice, customerId}) {
    
  
  return (
    <div className="flex">
      {/* Booking details */}
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span className="">Check In Date: {checkIn}</span>
          <span className="">Check Out Date: {checkOut}</span>
        </div>

        <div className="">
          <span className="">
            Guests: {`${guests?.adults} adults & ${guests?.children} children`}
          </span>
        </div>

        <div className="">
          <span className="">Booking Amount: {totalPrice}</span>
        </div>
      </div>

      {/* Customer Info */}
      {customerId?.name && (
        <div className="">
          {customerId?.user_Avatar?.url ? (
            <img
              src={customerId?.user_Avatar?.url}
              className="w-[2rem] h-[2rem] object-contain"
              alt=""
            />
          ) : (
            <AccountCircleOutlinedIcon
              style={{ width: "2rem", height: "2rem" }}
            />
          )}

          <span className="">{customerId?.name}</span>
        </div>
      )}
    </div>
  );}

export default TripBookingDetails