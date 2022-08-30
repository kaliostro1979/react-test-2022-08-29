import {removePassenger, removePassengerError, removePassengerSuccess} from "../slicers/deletePassengerSlice";

export const removePassengerAction = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch(removePassenger())
            const response = await fetch(`https://api.instantwebtools.net/v1/passenger/${id}`, {
                method: "DELETE"
            })
                .then(res=>res.json())
                .then(data=>data)
            dispatch(removePassengerSuccess({...response, id: id}))
        }catch (err){
            dispatch(removePassengerError(err))
        }
    }
}
