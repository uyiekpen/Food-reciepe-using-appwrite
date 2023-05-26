import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Import your slices/reducers
import userReducer from './reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other slices/reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
