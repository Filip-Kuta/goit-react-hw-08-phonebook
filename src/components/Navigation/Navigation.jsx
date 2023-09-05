import React from "react";
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from "./Navigation.styled";


function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <nav>
            <Link exact to="/">
                Home
            </Link>

            {isLoggedIn &&
            <Link to="/contacts">
                Contacts
            </Link>}
        </nav>
    )
}

export default Navigation;