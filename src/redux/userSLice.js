import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    signOut: (state, action) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, signOut } = userSlice.actions;

export default userSlice.reducer;
