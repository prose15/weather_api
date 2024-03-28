import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../store/apiSlice'

export const store = configureStore({
  reducer: {apiReducer},
})