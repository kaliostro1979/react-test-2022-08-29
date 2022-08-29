import {fetchPassenger, fetchPassengerError, fetchPassengerSuccess} from "../slicers/passengerSlice";

export const fetchSinglePassenger = (id) => {

    return async (dispatch) => {
        try {
            dispatch(fetchPassenger())
            const passenger = await fetch(`https://api.instantwebtools.net/v1/passenger/${id}`)
                .then(res => res.json())
                .then(data => data)
            dispatch(fetchPassengerSuccess(passenger))
        } catch (err) {
            dispatch(fetchPassengerError(err))
        }

    }
}
