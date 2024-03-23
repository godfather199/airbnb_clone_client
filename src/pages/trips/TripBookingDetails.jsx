import React from 'react'

function TripBookingDetails({checkIn, checkOut, guests, totalPrice}) {

    
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <span className="">Check In Date: {checkIn}</span>
        <span className="">Check Out Date: {checkOut}</span>
      </div>

      <div className="">
        <span className="">
          Guests: {`${guests.adults} adults & ${guests.children} children`}
        </span>
      </div>

      <div className="">
        <span className="">Booking Amount: {totalPrice}</span>
      </div>
    </div>
  );
}

export default TripBookingDetails