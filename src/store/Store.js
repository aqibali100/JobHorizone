import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserSlice.js';

export const store = configureStore({
    reducer: {
        users: UserReducer,
    },
});