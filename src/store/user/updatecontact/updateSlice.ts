
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../utils/types'




export  interface UpdateState {
  // items: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UpdateState = {
  // items: [],
  status: 'idle',
  error: null,
}

const updateSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateContactRequest: (state, action: PayloadAction<User>) => {
      state.status = 'loading'
    },
    updateContactSuccess: (state) => {
      state.status = 'succeeded'
      // state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateContactFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { updateContactRequest, updateContactSuccess, updateContactFailure } = updateSlice.actions
export default updateSlice.reducer
