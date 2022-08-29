import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAirlinesAction} from "../../redux/actions/airlines";
import AirlineCard from "./AirlineCard";
import Preloader from "../UI/preloader/Preloader";
import Pagination from "../UI/pagination/Pagination";

const AirLines = () => {
    const airlines = useSelector(state => state.main.airlines.airlines)
    const isLoading = useSelector(state => state.main.airlines.isLoading)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAirlinesAction(0, 20))
    }, [dispatch])

    return (
        <div className={"airlines-card__main"}>
            <div className={"airlines-card__wrapper"}>
                {
                    !isLoading && airlines.data ? airlines.data.map(item => {
                        return <AirlineCard item={item} key={item._id}/>
                    }) : <Preloader/>
                }
            </div>
            <Pagination itemsPerPage={20} totalPages={airlines.totalPages} callBack={fetchAirlinesAction}/>
        </div>
    );
};

export default AirLines;
