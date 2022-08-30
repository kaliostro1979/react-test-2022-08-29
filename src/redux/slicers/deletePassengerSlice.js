import {createSlice} from "@reduxjs/toolkit";

const deletePassengerSlice = createSlice({
    name: "removePassenegr",
    initialState: {
        isLoading: false,
        responseMessage: "",
        error: ""
    },
    reducers: {
        removePassenger(state){
            state.isLoading = true
        },
        removePassengerSuccess(state, action){
            console.log(action);
            state.isLoading = false
            state.responseMessage = action.payload
        },
        removePassengerError(state, action){
            state.isLoading = false
            state.error = action.payload
        }
    },

})

export default deletePassengerSlice.reducer
export const {removePassenger, removePassengerSuccess, removePassengerError} = deletePassengerSlice.actions
