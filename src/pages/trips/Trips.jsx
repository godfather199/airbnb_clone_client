import {Property, SkeletonProperty} from '../../components'
import {TripBookingDetails} from '../'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { thunk_Booked_Properties } from '../../store/thunks/bookingThunk'

function Trips() {
  const dispatch = useDispatch()

  const {bookings, isLoading} = useSelector(state => state.booking)
console.log('Bookings: ', bookings)


  // Fetch logged-in users bookings
  useEffect(() => {
    dispatch(thunk_Booked_Properties())
  }, [])



  return (
    <div className="">
      {isLoading ? (
        // Loading indicator
        Array(5)
          .fill("")
          .map((item, idx) => <SkeletonProperty key ={idx} />)
      ) : (
        // Trip details
       <div className="flex gap-5">
        {bookings?.map((booking, idx) => (
          <div key = {idx} className="">
            {/* Property details */}
            <Property property={booking?.propertyId} />

            {/* Booking details */}
            <div className="">
              <TripBookingDetails {...booking} />              
            </div>
          </div>
        ))}
       </div>
      )}
    </div>
  );
}

export default Trips