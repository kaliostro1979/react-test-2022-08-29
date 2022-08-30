import {createSlice} from "@reduxjs/toolkit";

const passengersSlice = createSlice({
    name: "passengers",
    initialState: {
        isLoading: false,
        passengers: [],
        error: ""
    },
    reducers: {
        fetchAirlines(state) {
            state.isLoading = true
        },
        fetchAirlinesSuccess(state, action) {
            state.isLoading = false
            state.passengers = action.payload
            state.error = ""
        },
        fetchAirlinesError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    },
    extraReducers: {}
})

export default passengersSlice.reducer
export const { fetchAirlines, fetchAirlinesSuccess, fetchAirlinesError } = passengersSlice.actions
