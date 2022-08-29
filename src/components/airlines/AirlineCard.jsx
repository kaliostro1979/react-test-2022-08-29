import React from 'react';
import {fetchSinglePassenger} from "../../redux/actions/passenger";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const AirlineCard = ({item}) => {
    const airline = item.airline[0]
    const dispatch = useDispatch()


    return (
        <Link to={`/${item._id}`} className={"airline-card"} onClick={()=>dispatch(fetchSinglePassenger(item._id))}>
            <h2>{item.name}</h2>
            <div className={"airline-info"}>
                <p>{airline.name}</p>
                <p>{airline.country}</p>
                <img src={airline.logo} alt=""/>
                <p>{airline.slogan}</p>
                <p>Website: {airline.website}</p>
            </div>
        </Link>
    );
};

export default AirlineCard;
