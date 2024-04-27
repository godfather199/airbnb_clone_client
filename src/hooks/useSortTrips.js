import { useEffect, useState } from "react";
import { reset_Booking_Success_State } from "../store/slices/bookingSlice";
import { useDispatch } from "react-redux";


export const useSortTrips = (isSuccess, bookings) => {
  const dispatch = useDispatch()


  const [ongoingTrips, setOngoingTrips] = useState([]);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [previousTrips, setPreviousTrips] = useState([]);


  useEffect(() => {
    if (isSuccess) {
      bookings?.map((booking) => {
        const checkInParts = booking.checkIn.split("/");
        const checkOutParts = booking.checkOut.split("/");

        const checkInDate = new Date(
          parseInt(checkInParts[2]),
          parseInt(checkInParts[1]) - 1,
          parseInt(checkInParts[0])
        );

        const checkOutDate = new Date(
          parseInt(checkOutParts[2]),
          parseInt(checkOutParts[1]) - 1,
          parseInt(checkOutParts[0])
        );

        const today = new Date();

        // console.log(
        //   `Start date: ${checkInDate} || End date: ${checkOutDate} || Today: ${today} || 1st condition: ${
        //     checkInDate.getTime() > today.getTime()
        //   } || 2nd condition: ${
        //     today.getTime() > checkInDate.getTime() &&
        //     today.getTime() > checkOutDate.getTime()
        //   }`
        // );

        if (checkInDate.getTime() > today.getTime()) {
          setUpcomingTrips((prev) => [...prev, booking]);
        } else if (
          today.getTime() > checkInDate.getTime() &&
          today.getTime() > checkOutDate.getTime()
        ) {
          setPreviousTrips((prev) => [...prev, booking]);
        } else {
          setOngoingTrips((prev) => [...prev, booking]);
        }
      });
    }

    return () => dispatch(reset_Booking_Success_State());
  }, [isSuccess]);

  return { ongoingTrips, previousTrips, upcomingTrips };
};
