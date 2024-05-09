import {Property} from '../../../components'
import {BookingAmount} from '../../'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunk_Fetch_Latest_Booking } from "../../../store/thunks/bookingThunk"
import { thunk_Fetch_Single_Property } from "../../../store/thunks/propertyThunk"
import { reset_Booking_Success_State } from "../../../store/slices/bookingSlice"
import { reset_Property_Details } from '../../../store/slices/propertySlice'


function StripeSuccess() {
  const dispatch = useDispatch()

  const {isLoading, booking, isSuccess} = useSelector(state => state.booking)
  const {property} = useSelector(state => state.property)
  // console.log('Latest booking: ', booking)
  // console.log('Property: ', property)

  // Fetch latest booking
  useEffect(() => {
    dispatch(thunk_Fetch_Latest_Booking())

  }, [])
  
  
  // Fetch property details
  useEffect(() => {
    if(isSuccess) {
      dispatch(thunk_Fetch_Single_Property(booking.propertyId))
      dispatch(reset_Booking_Success_State())
    }
    
    // return () => dispatch(reset_Property_Details())
  }, [isSuccess])  


  return (
    <div
      // style={{ border: "3px solid red" }}
      className="flex  justify-center w-[30rem] md:w-[50rem] h-[38rem] mb-5 "
    >
      <div
        // style={{ border: "3px solid purple" }}
        className="flex flex-col gap-8 sm:gap-0 justify-around w-[95%] lg:w-[100%] h-[90%] "
      >
        <div className="">
          <span className=" text-2xl lg:text-3xl font-serif text-red-500">
            Property has been successfully reserved for you.
          </span>
        </div>

        {property && booking && (
          <div className="flex flex-col md:flex-row  justify-center gap-[2rem] lg:gap-[4rem] border-2 border-gray-300 p-10 rounded-lg shadow-lg">
            <Property property={property} />
            <BookingAmount
              guests={booking?.guests}
              dateRange={[booking?.checkIn, booking?.checkOut]}
              cost={property?.price}
              stripeSuccess={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default StripeSuccess