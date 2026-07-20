import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './features/characterSlice'
export const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
})