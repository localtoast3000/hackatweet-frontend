import { createSlice } from '@reduxjs/toolkit';

const hashTags = createSlice({
  name: 'hashTags',
  initialState: {
    value: [],
  },
  reducers: {
    addTrend: (state, action) => {
      const found = state.value.find(({ hashTag }) => hashTag === action.payload);
      if (found) return (state.value[found].count += 1);
      state.value.push({ hashTag: action.payload, count: 1 });
    },
    removeTrend: (state, action) => {
      const found = state.value.find(({ hashTag }) => hashTag === action.payload);
      if (found) return (state.value[found].count -= 1);
      state.value = state.value.filter(({ hashTag }) => hashTag === action.payload);
    },
  },
});

export const { toggleBookmark, removeAllBookmark } = hashTags.actions;
export const selectBookmarks = (state) => state.hashTags.value;
export default hashTags.reducer;
