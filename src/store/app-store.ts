import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { feedReducer } from './feed/feed-slice';

export const store = configureStore({
  reducer: {
    feeds: feedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
