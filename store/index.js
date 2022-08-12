import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import fortuneSlice from './fortuneSlice';

const store = configureStore({
  reducer: {
    userAuth: authSlice,
    fortuneSlice: fortuneSlice,
  },
});

export default store;
