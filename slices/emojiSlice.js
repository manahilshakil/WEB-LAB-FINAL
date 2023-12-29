import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const response = await axios.get('https://emojihub.yurace.pro/api/all');
    return response.data; 
  } catch (error) {
    throw error;
  }
});

export const fetchByCategory = createAsyncThunk(
  "categories/fetchByCategory",
  async (category) => {
    try {
      const response = await axios.get(
        `https://emojihub.yurace.pro/api/category/${"smileys-and-people"}`
      );
      return response.data;
    } catch (error) {
      throw Error(`Failed to fetch metrics for category: ${category}`);
    }
  }
);

const emojiSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    status: 'idle', 
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { setCategories } = emojiSlice.actions;
export default emojiSlice.reducer;
