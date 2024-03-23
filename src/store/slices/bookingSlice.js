import { createSlice } from "@reduxjs/toolkit"
import { thunk_Booked_Properties, thunk_Fetch_Latest_Booking } from "../thunks/bookingThunk"

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
            state.bookings = users_Bookings
          });
    }
})


export const {reset_Booking_Success_State} = bookingSlice.actions


export default bookingSlice.reducer