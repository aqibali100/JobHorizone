import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../api/ApiRoutes';

export const postApplication = createAsyncThunk('applications/postApplication', async ({ applicationData, config }, { rejectWithValue }) => {
    try {
        const response = await service.postApplication(applicationData, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const applicationsSlice = createSlice({
    name: 'applications',
    initialState: {
        applications: [],
        application: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postApplication.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postApplication.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.applications.push(action.payload);
            })
            .addCase(postApplication.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default applicationsSlice.reducer;