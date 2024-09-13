import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserSlice.js';
import JobReducer from '../reducers/JobSlice.js';
import ApplicationReducer from '../reducers/ApplicationSlice.js';

export const store = configureStore({
    reducer: {
        users: UserReducer,
        jobs: JobReducer,
        applications: ApplicationReducer,
    },
});