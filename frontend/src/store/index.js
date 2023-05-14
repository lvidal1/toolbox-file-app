import { configureStore } from '@reduxjs/toolkit';
import fileSlice from './slices/fileSlice';

const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      [fileSlice.reducerPath]: fileSlice.reducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fileSlice.middleware)
  });
};

export default createStore;
