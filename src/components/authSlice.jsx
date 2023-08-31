import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null, // Możesz przechowywać dane użytkownika, np. token, tutaj
  },
  reducers: {
    login: (state, action) => {
      // Po zalogowaniu, ustaw stan autoryzacji na true
      state.isAuthenticated = true;
      // Zapisz dane użytkownika, np. token, jeśli takie dostajesz z serwera
      state.user = action.payload; // Przykład użycia: { token: 'xyz123' }
    },
    logout: (state) => {
      // Po wylogowaniu, zresetuj stan autoryzacji i usuń dane użytkownika
      state.isAuthenticated = false;
      state.user = null;
    },
    register: (state, action) => {
      // Po zarejestrowaniu, ustaw stan autoryzacji na true
      state.isAuthenticated = true;
      // Zapisz dane użytkownika, np. token, jeśli takie dostajesz z serwera
      state.user = action.payload; // Przykład użycia: { token: 'xyz123' }
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
