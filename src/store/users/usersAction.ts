import {  
   
    FETCH_USERS_API_DATA_REQUEST,
    // FETCH_USERS_API_DATA_FAILURE,
    //   FETCH_USERS_API_DATA_SUCCESS 
    } from "./types"


export const fetchUsersApiDataRequest=()=>({
    type : FETCH_USERS_API_DATA_REQUEST
})
// export const addContact=()=>({
//     type : ADD_CONTACT
// })
// export const fetchUsersApiDataSuccess=(data: unknown)=>({
//     type : FETCH_USERS_API_DATA_SUCCESS,
//     payload:data
// })
// export const fetchUsersApiDataFailure=(error:unknown)=>({
//     type : FETCH_USERS_API_DATA_FAILURE,
//     payload:error
// })

