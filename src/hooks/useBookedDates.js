import { parse } from "date-fns"



export const useBookedDates = (booking_Info) => {
    console.log('Booking: ', booking_Info)

    const extract_Dates = booking_Info?.map(({checkIn, checkOut}) => {
        

        return {
            startDate: format_Dates(checkIn),
            endDate: format_Dates(checkOut)
        }
    })

    return extract_Dates

    console.log('Result dates: ', extract_Dates)
}



const format_Dates = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);

  const dateObject = parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date());

  return dateObject
};


// use date-fns to convert '21/03/2024' into new Date(2024, 3, 21) format

// const dateString = '21/03/2024';
// const [day, month, year] = dateString.split('/').map(Number);

// // Subtract 1 from the month because months are zero-based in JavaScript Date objects
// const dateObject = parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date());

// console.log(dateObject); // Output: 2024-04-21T00:00:00.000Z