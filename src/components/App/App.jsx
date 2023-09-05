import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import './App.styled.jsx';
import AppBar from "../AppBar";
import { Container } from "./App.styled";
import HomeView from "views/HomeView";
import RegisterView from "views/RegisterView";
import LoginView from "views/LoginView";
import ContactsView from "views/ContactsView";
import {authOperations, authSelectors} from "redux/auth";

function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(authSelectors.getIsRefreshingCurrentUser);
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])
  
  return (
    !isRefreshingCurrentUser && (
      <Container>
      <AppBar />
      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/registration" restricted>
            <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </Container>)
    
  )
}

export default App;
