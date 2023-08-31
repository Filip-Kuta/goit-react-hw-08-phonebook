import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './authSlice';

function UserMenu() {
  const email = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserMenu;
