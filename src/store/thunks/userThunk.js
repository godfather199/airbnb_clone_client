import { createAsyncThunk } from "@reduxjs/toolkit";
import { add_To_Whishlist_Service, login_Service, logout_User_Service, properties_From_Whishlist_Service, register_Service, remove_From_Whishlist_Service, update_User_Info_Service } from "../../services/userService";



export const thunk_Register = createAsyncThunk(
    'user/register', async (info, thunkAPI) => {
        try {
            return await register_Service(info)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Login = createAsyncThunk(
    'user/login', async (info, thunkAPI) => {
        try {
            return await login_Service(info)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Add_To_Whishlist = createAsyncThunk(
  "user/add-whishlist",
  async (propertyId, thunkAPI) => {
    try {
      return await add_To_Whishlist_Service(propertyId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);



export const thunk_property_From_Whishlist = createAsyncThunk(
  "user/property-whishlist",
  async (thunkAPI) => {
    try {
      return await properties_From_Whishlist_Service()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);



export const thunk_Remove_From_Whishlist = createAsyncThunk(
  'user/remove-whishlist', async (propertyId, thunkAPI) => {
    try {
      return await remove_From_Whishlist_Service(propertyId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)



export const thunk_Update_User_Info = createAsyncThunk(
  'user/update-user', async (update_User, thunkAPI) => {
    try {
      return await update_User_Info_Service(update_User)
    } catch (error) {      
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)



export const thunk_Logout_User = createAsyncThunk(
  'user/logout', async () => {
    try {
      return await logout_User_Service();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
)