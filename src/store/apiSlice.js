import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const apiSlice = createSlice({
  name: 'apiSlice',
  initialState,
  reducers: {
    apiSlicer : (state,action) =>{
        state.data = action.payload
    }
  },
})

export const { apiSlicer } = apiSlice.actions

export default apiSlice.reducer