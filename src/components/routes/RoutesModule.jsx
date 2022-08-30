import React from 'react';
import {Route, Routes} from "react-router-dom";
import SinglePassengerPage from "../../pages/SinglePassengerPage";
import Home from "../../pages/Home";
import Layout from "../../layout/Layout";
import Tests from "../../pages/Tests";

const RoutesModule = () => {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={":id"} element={<SinglePassengerPage/>}/>
                <Route path={"/tests"} element={<Tests/>}/>
            </Routes>
        </Layout>
    );
};

export default RoutesModule;
