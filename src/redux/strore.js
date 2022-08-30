import {combineReducers, configureStore} from '@reduxjs/toolkit'
import passengerSlice from "./slicers/passengerSlice";
import deletePassengerSlice from "./slicers/deletePassengerSlice";
import passengersSlice from "./slicers/passengersSlice";

const rootReducer = combineReducers({
    passengers: passengersSlice,
    passenger: passengerSlice,
    removePassenger: deletePassengerSlice
})


export const store = configureStore({
    reducer: {main: rootReducer},
})
