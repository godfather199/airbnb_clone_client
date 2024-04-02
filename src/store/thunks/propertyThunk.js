import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetch_All_Properties_Service,
  fetch_Property_By_Category_Service,
  fetch_Single_Property_Service,
  logged_In_User_Property_Service,
  new_Property_Service,
  property_By_Filters_Service,
} from "../../services/propertyService";


export const thunk_New_Property = createAsyncThunk(
    'property/new-property', async (propertyInfo, thunkAPI) => {
        try {
            return await new_Property_Service(propertyInfo)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Fetch_All_Properties = createAsyncThunk(
    'property/all-property', async (thunkAPI) => {
        try {
            return await fetch_All_Properties_Service()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Fetch_Property_By_Category = createAsyncThunk(
    'property/category-property', async (category, thunkAPI) => {
        try {
            return await fetch_Property_By_Category_Service(category) 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Property_By_Filters = createAsyncThunk(
    'property/filters', async (info, thunkAPI) => {
        try {
            return property_By_Filters_Service(info)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Fetch_Single_Property = createAsyncThunk(
    'property/single-property', async (propertyId, thunkAPI) => {
        try {
            return await fetch_Single_Property_Service(propertyId)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }    
)




export const thunk_Logged_In_User_Property = createAsyncThunk(
    'property/user-properties', async (thunkAPI) => {
        try {
            return await logged_In_User_Property_Service()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)


