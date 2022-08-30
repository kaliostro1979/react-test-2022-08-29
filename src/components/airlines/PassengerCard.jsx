import React from 'react';
import {fetchSinglePassenger} from "../../redux/actions/passenger";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import RemoveUserIcon from "../icons/RemoveUserIcon";
import {removePassengerAction} from "../../redux/actions/removePassenger";

const PassengerCard = ({item}) => {
    const airline = item.airline[0]
    const dispatch = useDispatch()
    const {message} = useSelector(state => state.main.removePassenger.responseMessage)
    const {id} = useSelector(state => state.main.removePassenger.responseMessage)

    const removePassenger = (e, id) => {
        e.stopPropagation()
        e.preventDefault()
        item.removed = true
        dispatch(removePassengerAction(id))
    }

    return (
        <Link
            to={`/${item._id}`}
            className={"airline-card"}
            onClick={
                item.removed ?
                    (e) => {
                        e.preventDefault()
                    } :
                    () => dispatch(fetchSinglePassenger(item._id))}
            style={item.removed ? {backgroundColor: "lightgray", cursor: "default"} : null}
        >
            {
                item.removed ?
                    <div className={"removed-message"}>{message}</div>
                    : <div className={"remove"} onClick={(e) => removePassenger(e, item._id)}>
                        <RemoveUserIcon/>
                    </div>

            }

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

export default PassengerCard;
