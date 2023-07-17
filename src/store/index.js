import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './appSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
		[appSlice.reducerPath]: appSlice.reducer
	},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appSlice.middleware),
});

setupListeners(store.dispatch)