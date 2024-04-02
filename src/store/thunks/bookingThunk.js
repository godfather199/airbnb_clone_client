import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetch_Booked_Property_Service, fetch_Latest_Booking_Service, logged_In_User_Hosted_Property_Service } from "../../services/bookingService";



export const thunk_Fetch_Latest_Booking = createAsyncThunk(
    'booking/latest-booking', async (thunkAPI) => {
        try {
            return await fetch_Latest_Booking_Service()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)




export const thunk_Booked_Properties = createAsyncThunk(
    'property/user-bookings', async (thunkAPI) => {
        try {
            return await fetch_Booked_Property_Service()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)




export const thunk_Logged_In_User_Hosted_Property = createAsyncThunk(
    'booking/hosted-properties', async (thunkAPI) => {
        try {
            return await logged_In_User_Hosted_Property_Service()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)
