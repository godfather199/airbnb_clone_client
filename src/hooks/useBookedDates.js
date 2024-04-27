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


