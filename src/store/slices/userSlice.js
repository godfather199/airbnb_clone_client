import { createSlice } from "@reduxjs/toolkit"
import { thunk_Add_To_Whishlist, thunk_Login, thunk_Logout_User, thunk_Remove_From_Whishlist, thunk_Update_User_Info, thunk_property_From_Whishlist } from "../thunks/userThunk"
import toast from "react-hot-toast"

const initialState = {
    is_Loading: false,
    is_Success: false,
    is_Error: false,
    current_User: null,
    whishlist_Properties: [],
    is_Success_Whishlist: false
}


export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
      reset_User_State: (state) => {
        state.is_Loading = false
        state.is_Success = false
      },
      reset_Is_Success_Whishlist: (state) => {
        state.is_Success_Whishlist = false
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(thunk_Login.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Login.fulfilled, (state, {payload}) => {
            const {msg, info} = payload

            state.is_Loading = false
            state.is_Success = true
            state.current_User = info

            toast.success(msg, {
              duration: 2000,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Login.rejected, (state, {payload}) => {
            state.is_Loading = false
            state.is_Success = false

            toast.error(payload, {
              duration: 2000,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Add_To_Whishlist.fulfilled, (state, {payload}) => {
            const {msg, logged_In_User} = payload

            state.current_User = logged_In_User

            toast.success(msg, {
              duration: 1500,
              position: "bottom-center"
            })
          })
          .addCase(thunk_property_From_Whishlist.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_property_From_Whishlist.fulfilled, (state, {payload}) => {
            const {msg, properties} = payload

            state.is_Loading = false
            state.is_Success_Whishlist = true
            state.whishlist_Properties = properties
          })
          .addCase(thunk_Remove_From_Whishlist.fulfilled, (state, {payload}) => {
            const {msg, logged_In_User} = payload

            state.current_User = logged_In_User

            toast.success(msg, {
              duration: 1800,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Update_User_Info.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Update_User_Info.fulfilled, (state, {payload}) => {
            const {msg, updated_Info} = payload

            state.is_Loading = true
            state.is_Success = true
            state.current_User = updated_Info
            
            toast.success(msg, {
              duration: 2000,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Logout_User.fulfilled, (state, {payload}) => {
            const {msg} = payload
            
            // state.is_Success = true
            state.whishlist_Properties = []
            state.current_User = null

            toast.success(msg, {
              duration: 2000,
              position: 'bottom-center'
            })
          })
    }
})



export const { reset_User_State, reset_Is_Success_Whishlist } =
  userSlice.actions;


export default userSlice.reducer