import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    searchedJobData: [],
    loading: false,
    error: null,
};

// API URL
const url = "https://jsonfakery.com/jobs";

// Async thunk for fetching jobs
export const fetchData = createAsyncThunk("data/fetch", async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
});

const slice = createSlice({
    name: "ringerApp",
    initialState,
    reducers: {
        searchJob: (state, action) => {
            state.searchedJobData = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData?.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                console.log(action.payload, "slice");
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            });
    },
});

export const { searchJob } = slice.actions

export default slice.reducer;
