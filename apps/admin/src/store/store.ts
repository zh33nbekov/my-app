import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api'
import uiSlice from './ui/uiSlice'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		ui: uiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
