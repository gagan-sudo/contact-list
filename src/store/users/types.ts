export const FETCH_USERS_API_DATA_REQUEST = 'FETCH_USERS_API_DATA_REQUEST'
// export const FETCH_USERS_API_DATA_SUCCESS = 'FETCH_USERS_API_DATA_SUCCESS'
// export const FETCH_USERS_API_DATA_FAILURE = 'FETCH_USERS_API_DATA_FAILURE'

export interface FetchUsersApiDataRequest{
    type: typeof FETCH_USERS_API_DATA_REQUEST
}
// export interface FetchUsersApiDataSuccess{
//     type: typeof FETCH_USERS_API_DATA_SUCCESS
// }
// export interface FetchUsersApiDataFailure{
//     type: typeof FETCH_USERS_API_DATA_FAILURE
// }


export type UsersDataActionTypes = 
| FetchUsersApiDataRequest 
// | FetchUsersApiDataSuccess
// | FetchUsersApiDataFailure