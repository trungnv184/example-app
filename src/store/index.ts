import { configureStore } from '@reduxjs/toolkit';
import { feedReducer } from './feed/feed-slice';
export const store = configureStore({
  reducer: {
    feeds: feedReducer,
  },
});
