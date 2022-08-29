import React from 'react';
import {Route, Routes} from "react-router-dom";
import SinglePassengerPage from "../../pages/SinglePassengerPage";
import Home from "../../pages/Home";
import Layout from "../../layout/Layout";

const RoutesModule = () => {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={":id"} element={<SinglePassengerPage/>}/>
            </Routes>
        </Layout>
    );
};

export default RoutesModule;
