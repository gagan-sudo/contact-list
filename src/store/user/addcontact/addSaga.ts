
import { call, put, takeEvery } from 'redux-saga/effects'
import { addContactRequest, addContactSuccess, addContactFailure } from './addSlice'
import { nanoid, PayloadAction } from '@reduxjs/toolkit'
import API from '../../../api/api'
import { User } from '../../../utils/types'

function* addDataSaga(action: PayloadAction<User>) {
  try {
    // console.log(action.payload)
    yield call(API.post, '/users',{
      name:action.payload.name,
      address:action.payload.address,
      phone:action.payload.phone,
      id:nanoid(4),
      email:action.payload.email
    })
    yield put(addContactSuccess())
  } catch (error) {
    if (error instanceof Error) {
      yield put(addContactFailure(error.message))
    } else {
      yield put(addContactFailure('An unknown error occurred'))
    }
  }
}

export function* addContactSaga() {
  yield takeEvery(addContactRequest.type, addDataSaga)
}
