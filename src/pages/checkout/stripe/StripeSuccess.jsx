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
    <div className="">
      {property && booking && (
        <div className="flex items-center justify-around">
          <Property property={property} />
          <BookingAmount
            guests={booking?.guests}
            dateRange={[booking?.checkIn, booking?.checkOut]}
            cost={property?.price}
            stripeSuccess = {true}
          />
        </div>
      )}
    </div>
  );
}

export default StripeSuccess