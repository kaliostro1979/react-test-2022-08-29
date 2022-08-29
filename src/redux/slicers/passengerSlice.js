import {createSlice} from "@reduxjs/toolkit";

const passengerSlice = createSlice({
    name: "passenger",
    initialState: {
        passenger: {},
        isLoading: false,
        error: ""
    },
    reducers: {
        fetchPassenger(state) {
            state.isLoading = true
        },
        fetchPassengerSuccess(state, action) {
            state.isLoading = false
            state.passenger = action.payload
        },
        fetchPassengerError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default passengerSlice.reducer
export const {fetchPassenger, fetchPassengerError, fetchPassengerSuccess} = passengerSlice.actions
