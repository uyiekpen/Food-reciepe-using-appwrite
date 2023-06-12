import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: any; // Update the type according to the shape of the user object
  isLoggedIn: boolean;
};

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserdata: (state, action: PayloadAction<{ email: string , name: string}>) => {
      // Update the type here as well
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUserdata, logout } = userSlice.actions;
export default userSlice.reducer;
