
import { createSlice, PayloadAction } from '@reduxjs/toolkit'




export  interface DeleteState {
  // items: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: DeleteState = {
  // items: [],
  status: 'idle',
  error: null,
}

const deleteSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {
    deleteContactRequest: (state, action: PayloadAction<string>) => {
      state.status = 'loading'
    },
    deleteContactSuccess: (state, action: PayloadAction<string>) => {
      state.status = 'succeeded'
      // state.items = state.items.filter(item => item.id !== action.payload)
    },
    deleteContactFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { deleteContactRequest, deleteContactSuccess, deleteContactFailure } = deleteSlice.actions
export default deleteSlice.reducer
