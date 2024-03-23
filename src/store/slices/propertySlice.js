import { createSlice } from "@reduxjs/toolkit";
import {
  thunk_Fetch_All_Properties,
  thunk_Fetch_Property_By_Category,
  thunk_Fetch_Single_Property,
  thunk_New_Property,
  thunk_Property_By_Filters,
} from "../thunks/propertyThunk";
import toast from "react-hot-toast";

const initialState = {
  isLoading: false,
  isSuccess: false,
  property: {},
  properties: [],
  filterFlag: false,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    reset_Property: (state) => {
      state.isSuccess = false;
    },
    property_Details: (state, { payload }) => {
      const { propertyId } = payload;

      state.property = state.properties.find(({ _id }) => _id === propertyId);
    },
    reset_Property_Details: (state) => {
      state.property = {};
    },
    set_Filter_Flag: (state, { payload }) => {
      state.filterFlag = payload;
    },
    set_Whishlist_Properties: (state, { payload }) => {
      state.properties = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunk_New_Property.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunk_New_Property.fulfilled, (state, { payload }) => {
        const { msg, new_Property } = payload;

        state.isLoading = false;
        state.isSuccess = true;
        // state.properties = [...state.properties, new_Property]

        toast.success("New Property created", {
          duration: 1200,
          position: "bottom-center",
        });
      })
      .addCase(thunk_Fetch_All_Properties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunk_Fetch_All_Properties.fulfilled, (state, { payload }) => {
        const { msg, properties } = payload;

        state.isLoading = false;
        state.properties = properties;
      })
      .addCase(thunk_Fetch_Property_By_Category.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        thunk_Fetch_Property_By_Category.fulfilled,
        (state, { payload }) => {
          const { msg, properties } = payload;

          state.isLoading = false;
          state.properties = properties;
        }
      )
      .addCase(thunk_Property_By_Filters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunk_Property_By_Filters.fulfilled, (state, { payload }) => {
        const { msg, properties } = payload;

        state.isLoading = false;
        state.properties = properties;
      })
      .addCase(thunk_Fetch_Single_Property.fulfilled, (state, { payload }) => {
        const { msg, property } = payload;

        state.property = property;
      });
  },
});

export const {
  reset_Property,
  property_Details,
  reset_Property_Details,
  set_Filter_Flag,
  set_Whishlist_Properties,
} = propertySlice.actions;

export default propertySlice.reducer;
