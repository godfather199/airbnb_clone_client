import {SkeletonProperty, Property} from '../../components'
import {TripBookingDetails} from '../'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunk_Logged_In_User_Hosted_Property } from "../../store/thunks/bookingThunk"



function HostedProperties() {
  const dispatch = useDispatch()

  const {bookings, isLoading} = useSelector(state => state.booking)
  // console.log('Bookings: ', bookings)


  // Fetch logged-in-user's hosted property
  useEffect(() => {
    dispatch(thunk_Logged_In_User_Hosted_Property())
  }, [])


  return (
    <div className="">
      {isLoading ? (
        // Loading indicator
        Array(5)
          .fill("")
          .map((item, idx) => <SkeletonProperty key={idx} />)
      ) : (
        // Trip details
        <div className="flex gap-5">
          {bookings?.map((booking, idx) => (
            <div key={idx} className="">
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

export default HostedProperties