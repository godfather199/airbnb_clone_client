import { TripBookingDetails} from '../'
import {Property, NoItemsFound} from '../../components'




function TripCard({bookings, notFound}) {

    
  return (
    <div
      // style={{ border: "3px solid purple" }}
      // className="w-[70rem] h-auto mb-5"
      className=" w-[28rem] sm:w-[37rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem] h-auto flex flex-col gap-5 mb-5"
    >
      {bookings.length === 0 ? (
        <NoItemsFound title={notFound} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {bookings?.map((booking, idx) => (
            <div
              // style={{ border: "3px solid red" }}
              key={idx}
              className="flex flex-col items-center justify-center gap-5 border-4 border-red-500 bg-white p-7 rounded-lg shadow-lg"
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
    </div>
  );
}

export default TripCard