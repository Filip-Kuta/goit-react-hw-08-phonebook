import React from "react";
import { Link } from "../Navigation/Navigation.styled";

function AuthNav() {
    return (
        <nav>
            <Link
                to="/login"
            >
                LogIn
            </Link>

            <Link
                to="/registration"
            >
                Registration
            </Link>
        </nav>
    )
}

export default AuthNav;