import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const readData = createAsyncThunk(
  "readData",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://api.quotable.io/random");

    try {
      const result = await response.json();
    //   console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const readDataslice = createSlice({
  name: "readDataslice",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },

  extraReducers: {
    [readData.pending]: (state) => {
      state.loading = true;
    },
    [readData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [readData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default readDataslice.reducer;

export const { searchUser } = readDataslice.actions;
