import {fetchAirlines, fetchAirlinesError, fetchAirlinesSuccess} from "../slicers/airlinesSlice";

export const fetchAirlinesAction = (page, perPage)=>{

    return async (dispatch)=>{
        try {
            dispatch(fetchAirlines())
            const airlines = await fetch(`https://api.instantwebtools.net/v1/passenger?size=${perPage}&page=${page}`)
                .then(res=>res.json())
                .then(data => data)
            dispatch(fetchAirlinesSuccess(airlines))
        }catch (err){
            dispatch(fetchAirlinesError(err))
        }
    }
}
