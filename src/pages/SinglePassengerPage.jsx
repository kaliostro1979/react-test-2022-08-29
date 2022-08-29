import React from 'react';
import {useSelector} from "react-redux";

const SinglePassengerPage = () => {
    const passenger = useSelector(state => state.main.passenger.passenger)

    return (
        <div>
            {passenger.name}
        </div>
    );
};

export default SinglePassengerPage;
