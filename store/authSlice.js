import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  lastName: null,
  horoscope: null,
  gold: null,
  profileImg: null,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.lastName = action.payload.lastName;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.horoscope = action.payload.horoscope;
      state.gold = action.payload.gold;
      state.profileImg = action.payload.profileImg;
    },
    setSignOut: state => {
      state.email = null;
      state.userName = null;
      state.lastName = null;
      state.isLoggedIn = false;
      state.horoscope = null;
      state.gold = null;
      state.profileImg = null;
    },

    incrementGolds: (state, action) => {
      state.gold += action.payload;
    },

    decrementGolds: (state, action) => {
      state.gold -= action.payload;
    },

    changeProfileImg: (state, action) => {
      state.profileImg = action.payload;
    },
  },
});

export const {
  setSignIn,
  setSignOut,
  incrementGolds,
  decrementGolds,
  changeProfileImg,
} = authSlice.actions;

export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectLastName = state => state.userAuth.lastName;
export const selectEmail = state => state.userAuth.email;
export const selectUserName = state => state.userAuth.userName;
export const selectHoroscope = state => state.userAuth.horoscope;
export const selectGold = state => state.userAuth.gold;
export const selectProfileImg = state => state.userAuth.profileImg;

export default authSlice.reducer;
