import React from 'react';
import Header from "../components/UI/header/Header";
import Footer from "../components/UI/footer/Footer";

const Layout = ({children}) => {
    return (
        <div className={"container"}>
            <Header/>
            <div className={"body"}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
