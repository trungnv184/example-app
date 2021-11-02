import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFeeds } from 'services';

export const fetchFeedsAsync = createAsyncThunk(
  'feeds/fetchFeeds',
  async () => {
    const response = await fetchFeeds();
    return response.data;
  }
);
