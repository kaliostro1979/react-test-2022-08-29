import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../logo/Logo";

const Header = () => {
    return (
        <nav className={"navBar"}>
            <ul>
                <li>
                    <Link to={"/"}>
                        <div className={"logo"}>
                            <Logo/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/tests"}>Tests</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
