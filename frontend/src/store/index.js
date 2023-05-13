import { configureStore } from '@reduxjs/toolkit';
import fileSlice from './slices/fileSlice';

const store = configureStore({
  reducer: {
    [fileSlice.reducerPath]: fileSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fileSlice.middleware)
});

export default store;
