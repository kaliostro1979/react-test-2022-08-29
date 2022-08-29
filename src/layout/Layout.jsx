import React from 'react';
import Header from "../components/UI/header/Header";
import Footer from "../components/UI/footer/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;