import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: window.localStorage('the-zoo-token'),
  },
  reducers: {
    login: (state) => {
      window.localStorage.setItem('the-zoo-token', action.payload);
      state.token = action.payload;
    },
    logout: (state) => {
      window.localStorage.removeItem('the-zoo-token');
      state.token = null;
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer