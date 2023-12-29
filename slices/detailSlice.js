import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmojiDetails = createAsyncThunk(
  'details/fetchEmojiDetails',
  async (emojiId) => {
    try {
      const response = await axios.get(`https://emojihub.yurace.pro/api/random/group/face-positive`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const detailSlice = createSlice({
  name: 'details',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    setEmojiDetails: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmojiDetails.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(fetchEmojiDetails.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });

    builder.addCase(fetchEmojiDetails.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { setEmojiDetails } = detailSlice.actions;
export default detailSlice.reducer;
