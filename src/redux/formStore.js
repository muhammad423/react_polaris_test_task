import { configureStore } from '@reduxjs/toolkit'
import formsSlice from './formsSlice'

export const store = configureStore({
  reducer: {
    polaris: formsSlice,
  },
})