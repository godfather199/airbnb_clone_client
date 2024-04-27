import { createSlice } from "@reduxjs/toolkit"
import { thunk_Booked_Properties, thunk_Fetch_Latest_Booking, thunk_Logged_In_User_Hosted_Property } from "../thunks/bookingThunk"

const initialState = {
    isLoading: false,
    isSuccess: false,
    booking: {},
    bookings: []
}


export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
      reset_Booking_Success_State: (state) => {
        state.isSuccess = false
      },
      reset_Bookings_State: (state) => {
        state.bookings = []
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(thunk_Fetch_Latest_Booking.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(
            thunk_Fetch_Latest_Booking.fulfilled,
            (state, { payload }) => {
              const { msg, most_Recent_Booking } = payload;

              state.isLoading = false;
              state.isSuccess = true;
              state.booking = most_Recent_Booking;
            }
          )
          .addCase(thunk_Booked_Properties.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(thunk_Booked_Properties.fulfilled, (state, { payload }) => {
            const { msg, users_Bookings } = payload;

            state.isLoading = false;
            state.isSuccess = true;
            state.bookings = users_Bookings;
          })
          .addCase(thunk_Logged_In_User_Hosted_Property.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(
            thunk_Logged_In_User_Hosted_Property.fulfilled,
            (state, { payload }) => {
              const { msg, filter_Booked_Properties } = payload;

              state.isLoading = false;
              // state.bookings = filter_Booked_Properties[0].property_Bookings

              // state.bookings = filter_Booked_Properties.map(({property_Bookings}) => property_Bookings[0])

              let fetched_Bookings = []

              filter_Booked_Properties.map(({ property_Bookings }) => {
                property_Bookings.map((item) => fetched_Bookings.push(item));
              });

              state.bookings = fetched_Bookings
            }
          );
    }
})


export const {reset_Bookings_State, reset_Booking_Success_State} = bookingSlice.actions


export default bookingSlice.reducer