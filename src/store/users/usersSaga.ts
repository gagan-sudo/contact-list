
import API from "../../api/api";
import {call, put, takeEvery} from 'redux-saga/effects'
import { FETCH_USERS_API_DATA_REQUEST } from "./types";
import { UsersDataActionTypes } from "./types";
import { fetchUsersDataRequest, fetchUsersDataSuccess,fetchUsersDataFailure } from "./usersSlice";
import { AnyAction } from "redux-saga";


function* usersApiDataFetch(){
    try{
        put(fetchUsersDataRequest())
    const response:AnyAction = yield call(API.get,'/users')
    yield put(fetchUsersDataSuccess(response.data))
    }catch(error){
        if(error instanceof Error){

            yield put(fetchUsersDataFailure(error.message))
        }
        // else{
        //     yield put(fetchUsersApiDataFailure(error))
        // }
    }
}

export default function* usersSaga(){
    yield takeEvery<UsersDataActionTypes>(FETCH_USERS_API_DATA_REQUEST,usersApiDataFetch)
}