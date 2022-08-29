import {combineReducers, configureStore} from '@reduxjs/toolkit'
import airlinesSlice from "./slicers/airlinesSlice";
import passengerSlice from "./slicers/passengerSlice";

const rootReducer = combineReducers({
    airlines: airlinesSlice,
    passenger: passengerSlice
})


export const store = configureStore({
    reducer: {main: rootReducer},
})
