

const trips_Badge = [
    {
        styles: 'absolute top-[2.7rem] left-[6.5rem] bg-green-600 flex items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full z-10',
        type: 'ongoing'
    },
    {
        styles: 'absolute top-[2.7rem] left-[16rem] bg-green-600 flex items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full z-10',
        type: 'upcoming'
    },
    {
        styles: 'absolute top-[2.7rem] left-[25rem] bg-green-600 flex items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full z-10',
        type: 'previous'
    },

]


function TripsBadge({ongoingTrips, upcomingTrips, previousTrips}) {
    

  return (
    <>
      {trips_Badge.map(({ styles, type }) => (
        <div className={styles}>
          <span className="text-white text-sm font-bold">
            {type === "ongoing"
              ? ongoingTrips.length
              : type === "upcoming"
              ? upcomingTrips.length
              : previousTrips.length}
          </span>
        </div>
      ))}
    </>
  );
}

export default TripsBadge;
