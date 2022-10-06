import { createSlice } from '@reduxjs/toolkit';
import { validateBody } from '../lib/helpers';

const user = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    mountUser: (state, action) => {
      if (!validateBody({ body: action.payload, expectedPropertys: ['username', 'token'] })) return;
      state.value = action.payload;
    },
    dismountUser: (state) => {
      state.value = {};
    },
  },
});

export const { mountUser, dismountUser } = user.actions;
export const selectUser = (state) => state.user.value;
export default user.reducer;
