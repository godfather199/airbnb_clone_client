import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import propertyReducer from './slices/propertySlice'
import userReducer from './slices/userSlice'
import bookingReducer from './slices/bookingSlice'



const persistConfig = {
    key: 'root',
    storage
}


const combinedReducer = combineReducers({
    property: propertyReducer,
    user: userReducer,
    booking: bookingReducer
})


const persistedReducer = persistReducer(persistConfig, combinedReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
  
  
  
  export default store