import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserSlice.js';
import JobReducer from '../reducers/JobSlice.js';

export const store = configureStore({
    reducer: {
        users: UserReducer,
        jobs: JobReducer,
    },
});