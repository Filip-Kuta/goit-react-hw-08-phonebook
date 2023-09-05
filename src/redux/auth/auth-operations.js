import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apiService from "services/ApiService";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegistration = createAsyncThunk(
    "users/signup", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await apiService.register(userData);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const userLogIn = createAsyncThunk(
    "users/login", async (userData, { rejectWithValue }) => {
    try {
        const {data} = await apiService.logIn(userData);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const userLogOut = createAsyncThunk(
    "users/logout", async (_, { rejectWithValue }) => {
    try {
        await apiService.logOut();
        token.unset();
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const fetchCurrentUser = createAsyncThunk(
    "users/current", async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const persistedtToken = state.auth.token;
            
        if (persistedtToken === null) {
           return rejectWithValue();
        }

        token.set(persistedtToken);

        try {
            const { data } = await apiService.currentUser();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
}
);