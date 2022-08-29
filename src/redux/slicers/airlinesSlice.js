import {createSlice} from "@reduxjs/toolkit";

const airlinesSlice = createSlice({
    name: "airlines",
    initialState: {
        isLoading: false,
        airlines: [],
        error: ""
    },
    reducers: {
        fetchAirlines(state) {
            state.isLoading = true
        },
        fetchAirlinesSuccess(state, action) {
            state.isLoading = false
            state.airlines = action.payload
            state.error = ""
        },
        fetchAirlinesError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    },
    extraReducers: {}
})

export default airlinesSlice.reducer
export const { fetchAirlines, fetchAirlinesSuccess, fetchAirlinesError } = airlinesSlice.actions
