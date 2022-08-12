import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  waitFortuneResponse: false,
  waitMessage: null,
  checkResponse: true,
};

const fortuneSlice = createSlice({
  name: 'fortuneSlice',
  initialState,
  reducers: {
    WaitResponse: state => {
      state.waitFortuneResponse = true;
      state.waitMessage = 'Falınız hazırlanıyor';
    },
    CompleteResponse: state => {
      state.waitFortuneResponse = false;
      state.waitMessage = null;
    },
    UnCheckResponse: state => {
      state.checkResponse = false;
    },
    CheckResponse: state => {
      state.checkResponse = true;
    },
  },
});

export const {WaitResponse, CompleteResponse, UnCheckResponse, CheckResponse} =
  fortuneSlice.actions;

export const selectWaitFortuneResponse = state =>
  state.fortuneSlice.waitFortuneResponse;

export const selectWaitMessage = state => state.fortuneSlice.waitMessage;

export const selectCheckResponse = state => state.fortuneSlice.checkResponse;

export default fortuneSlice.reducer;
