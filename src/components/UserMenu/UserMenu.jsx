import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import { UserMenuContainer, Button, UserMenuText } from "./UserMenu.styled";

function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <UserMenuContainer>
            <UserMenuText>Welcome, {name}</UserMenuText>
            <Button type='button' onClick={()=> dispatch(authOperations.userLogOut())}>LogOut</Button>
        </UserMenuContainer>
    )
}

export default UserMenu;
