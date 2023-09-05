import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({
    children,
    redirectTo = "/",
    ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>{
            isLoggedIn ? children: <Redirect to={redirectTo}/>
        }</Route>
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
    redirectTo: PropTypes.string,
}