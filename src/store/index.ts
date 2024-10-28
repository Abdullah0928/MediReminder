import { configureStore } from '@reduxjs/toolkit';
import medicationReducer from './medicationSlice';

const rootReducer = {
  medications: medicationReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;