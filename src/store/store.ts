import { configureStore } from '@reduxjs/toolkit';
import projectReducers from './reducers/projectReducers';

export const store = configureStore({
  reducer: {
    projects: projectReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
