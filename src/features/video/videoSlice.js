import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.video = {};
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.video = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.video = {};
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
