import {SkeletonProperty, Property, NoItemsFound} from '../../components'
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
        <>
          {bookings.length === 0 ? (
            <NoItemsFound title = 'Hosted' />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {bookings?.map((booking, idx) => (
                <div
                  // style={{ border: "5px solid black" }}
                  key={idx}
                  className=" flex flex-col items-center justify-center gap-5"
                >
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
        </>
      )}
    </div>
  );
}

export default HostedProperties