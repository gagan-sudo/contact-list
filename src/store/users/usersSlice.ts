
import { createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name:'users',
    initialState:{
        data:[],
        status:'idle',
        error:null
    },
    reducers:{
       fetchUsersDataRequest:(state)=>{
        state.status='loading'
       },
       fetchUsersDataSuccess:(state,action)=>{
         state.status='succeeded'
         state.data=action.payload
       },
       fetchUsersDataFailure:(state,action)=>{
         state.status='failed'
         state.error=action.payload
       }
    }
})

export const {fetchUsersDataRequest,fetchUsersDataSuccess,fetchUsersDataFailure} = usersSlice.actions
export default usersSlice.reducer