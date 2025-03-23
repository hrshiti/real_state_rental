import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for fetching villas from API
export const fetchVillas = createAsyncThunk(
  'villas/fetchVillas',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error('Failed to fetch villas');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const villasSlice = createSlice({
    name: 'villas',
    initialState: {
      data: [],
      loading: false,
      error: null,
    },
    reducers: {
      // (Optional) Additional synchronous reducers if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchVillas.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchVillas.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
        .addCase(fetchVillas.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default villasSlice.reducer;
  