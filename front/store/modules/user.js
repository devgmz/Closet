import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  isLoggedIn: false,
};

const userSlice = createSlice( {
  name: 'user',
  initialState,
  reducers: {
    
  }
} )

export const { login } = userSlice.actions;
export default userSlice.reducer;