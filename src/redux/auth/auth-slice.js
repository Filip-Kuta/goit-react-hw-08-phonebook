import { createSlice } from '@reduxjs/toolkit';
import { userRegistration, userLogIn, userLogOut, fetchCurrentUser} from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userRegistration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userLogIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userLogOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;