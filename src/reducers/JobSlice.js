import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../api/ApiRoutes';

export const createJob = createAsyncThunk('jobs/createJob', async ({ jobData, config }, { rejectWithValue }) => {
    try {
        const response = await service.createJob(jobData, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (config, { rejectWithValue }) => {
    try {
        const response = await service.getAllJobs(config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const fetchJobById = createAsyncThunk('jobs/fetchJobById', async ({ jobId, config }, { rejectWithValue }) => {
    try {
        const response = await service.getJobById(jobId, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const updateJob = createAsyncThunk('jobs/updateJob', async ({ jobId, jobData, config }, { rejectWithValue }) => {
    try {
        const response = await service.updateJobById(jobId, jobData, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteJob = createAsyncThunk('jobs/deleteJob', async ({ jobId, config }, { rejectWithValue }) => {
    try {
        const response = await service.deleteJobById(jobId, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
const initialState = {
    jobs: [],
    job: null,
    loading: false,
    error: null,
};
const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        clearJob: (state) => {
            state.job = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs.push(action.payload);
            })
            .addCase(createJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchJobById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobById.fulfilled, (state, action) => {
                state.loading = false;
                state.job = action.payload;
            })
            .addCase(fetchJobById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateJob.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.jobs.findIndex(job => job._id === action.payload._id);
                if (index !== -1) {
                    state.jobs[index] = action.payload;
                }
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteJob.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = state.jobs.filter(job => job._id !== action.meta.arg.jobId);
            })
            .addCase(deleteJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearJob } = jobSlice.actions;

export default jobSlice.reducer;
