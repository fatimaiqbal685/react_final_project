import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
}

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
  
  },
})



export default characterSlice.reducer