import React from "react";
import { useSelector } from "react-redux";
import {authSelectors} from "redux/auth";
import {Header} from "./AppBar.styled"
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu />: <AuthNav />}
        </Header>
    )
}

export default AppBar;