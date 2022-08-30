import {fetchAirlines, fetchAirlinesError, fetchAirlinesSuccess} from "../slicers/passengersSlice";

export const fetchPassengersAction = (page, perPage)=>{

    return async (dispatch)=>{
        try {
            dispatch(fetchAirlines())
            const passengers = await fetch(`https://api.instantwebtools.net/v1/passenger?size=${perPage}&page=${page}`)
                .then(res=>res.json())
                .then(data => data)
            dispatch(fetchAirlinesSuccess(passengers))
        }catch (err){
            dispatch(fetchAirlinesError(err))
        }
    }
}
