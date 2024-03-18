import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    userToken: '',
    userId: '',
    userName: '',
    userEmail: '',
    userPassword: '',
  },
  name: 'user',
  reducers:{
    addUser: (state, action) => {
      state.userId = Date.now()
      state.userToken = Date.now()
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
      state.userPassword = action.payload.userPassword
    }
  }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer;