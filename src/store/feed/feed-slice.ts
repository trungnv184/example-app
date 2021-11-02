import { createSlice } from '@reduxjs/toolkit';
import { Feed } from 'types';
import { fetchFeedsAsync } from './feed-actions';

export interface FeedState {
  feeds: Feed[];
  status: 'loading' | 'idle' | 'failed';
}

const initialState: FeedState = {
  feeds: [],
  status: 'idle',
};

export const feedSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeedsAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchFeedsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.feeds = action.payload;
      console.log(action);
    });
  },
});

export const feedActions = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
