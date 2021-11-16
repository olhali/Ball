import { configureStore } from '@reduxjs/toolkit';
import operationReducer from '../features/operationSlice';

export const store = configureStore({
    reducer: {
        operation: operationReducer
    }
});