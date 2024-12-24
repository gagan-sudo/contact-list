
import { call, put, takeEvery } from 'redux-saga/effects'
import { updateContactRequest, updateContactSuccess, updateContactFailure } from './updateSlice'
import {  PayloadAction } from '@reduxjs/toolkit'
import API from '../../../api/api'
import { User } from '../../../utils/types'

function* updateDataSaga(action: PayloadAction<User>) {
  try {
    // console.log(action.payload)
    yield call(API.put, `/users/${action.payload.id}`,action.payload)
    yield put(updateContactSuccess())
  } catch (error) {
    if (error instanceof Error) {
      yield put(updateContactFailure(error.message))
    } else {
      yield put(updateContactFailure('An unknown error occurred'))
    }
  }
}

export function* updateContactSaga() {
  yield takeEvery(updateContactRequest.type, updateDataSaga)
}
