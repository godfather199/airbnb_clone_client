import axios from "axios"


export const fetch_Latest_Booking_Service = async () => {
    const {data} = await axios.get(
        `/api/booking/latest-booking`
    )

    return data
}




export const fetch_Booked_Property_Service = async () => {
    const {data} = await axios.get(
      `/api/booking/user-bookings`
    )
    
    return data
  }



  
  export const logged_In_User_Hosted_Property_Service = async () => {
    const {data} = await axios.get(
      `/api/booking/hosted-properites`
    )

  
    return data
  }