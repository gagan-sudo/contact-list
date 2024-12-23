import { call, put, takeEvery } from 'redux-saga/effects'
import { addDataRequest, addDataSuccess, addDataFailure } from './userSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { AnyAction } from 'redux-saga'
import API from '../../../api/api'
import { User } from '../../../utils/types'


function* addContactApi(action: PayloadAction<User>) {
    // console.log(action.payload)
    try {
        const response: AnyAction = yield call(API.post, '/users', action.payload)
        yield put(addDataSuccess(response.data))
    } catch (error) {
        if (error instanceof Error) {
            yield put(addDataFailure(error.message))
        } else {
            yield put(addDataFailure('An unknown error occurred'))
        }
    }
}
export function* addContactSaga() {
    yield takeEvery(addDataRequest.type, addContactApi)
}