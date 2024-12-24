
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../utils/types'




export  interface AddState {
  // items: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: AddState = {
  // items: [],
  status: 'idle',
  error: null,
}

const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addContactRequest: (state, action: PayloadAction<User>) => {
      state.status = 'loading'
    },
    addContactSuccess: (state) => {
      state.status = 'succeeded'
      // state.items = state.items.filter(item => item.id !== action.payload)
    },
    addContactFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { addContactRequest, addContactSuccess, addContactFailure } = addSlice.actions
export default addSlice.reducer
