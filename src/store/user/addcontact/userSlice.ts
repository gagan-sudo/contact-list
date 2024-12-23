import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../utils/types'


// interface Item {
//     id?: number
//     name: string
// }

interface DataState {
    items: User[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: DataState = {
    items: [],
    status: 'idle',
    error: null,
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addDataRequest: (state,action:{payload:User,type:string}) => {
            state.status = 'loading'
        },
        addDataSuccess: (state, action: PayloadAction<User>) => {
            state.status = 'succeeded'
            console.log(state)
            state.items.push(action.payload)
        },
        addDataFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed'
            state.error = action.payload
        },
        
    },
})
export const { addDataRequest,addDataSuccess, addDataFailure } = dataSlice.actions
export default dataSlice.reducer