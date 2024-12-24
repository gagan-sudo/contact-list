
import API from "../../api/api"
import {call, put, takeEvery} from 'redux-saga/effects'

import { UsersDataActionTypes } from "./types"
import { fetchUsersDataRequest, fetchUsersDataSuccess,fetchUsersDataFailure } from "./usersSlice"
import { AnyAction } from "redux-saga"


function* usersApiDataFetch(){
    try{
        // put(fetchUsersDataRequest())
    const response:AnyAction = yield call(API.get,'/users')
    yield put(fetchUsersDataSuccess(response.data))
    }catch(error){
        if(error instanceof Error){

            yield put(fetchUsersDataFailure(error.message))
        }
        else{
            yield put(fetchUsersDataFailure("Unknown error"))
        }
    }
}

export default function* usersSaga(){
    yield takeEvery<UsersDataActionTypes>(fetchUsersDataRequest.type,usersApiDataFetch)
    
}