import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPassengersAction} from "../../redux/actions/passengers";
import PassengerCard from "./PassengerCard";
import Preloader from "../UI/preloader/Preloader";
import Pagination from "../UI/pagination/Pagination";

const Passengers = () => {
    const passengers = useSelector(state => state.main.passengers.passengers)
    const isLoading = useSelector(state => state.main.passengers.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPassengersAction(0, 20))
    }, [dispatch])

    return (
        <div className={"airlines-card__main"}>
            <div className={"airlines-card__wrapper"}>
                {
                    !isLoading && passengers.data ? passengers.data.map(item => {
                        return <PassengerCard item={{...item, removed: false}} key={item._id}/>
                    }) : <Preloader/>
                }
            </div>
            <Pagination itemsPerPage={20} totalPages={passengers.totalPages} callBack={fetchPassengersAction}/>
        </div>
    );
};

export default Passengers;
