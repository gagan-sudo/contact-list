
import { call, put, takeEvery } from 'redux-saga/effects'
import { deleteContactRequest, deleteContactSuccess, deleteContactFailure } from './deleteSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import API from '../../../api/api'

function* deleteDataSaga(action: PayloadAction<string>) {
  try {
    yield call(API.delete, `users/${action.payload}`) 
    yield put(deleteContactSuccess(action.payload))
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteContactFailure(error.message))
    } else {
      yield put(deleteContactFailure('An unknown error occurred'))
    }
  }
}

export function* deleteContactSaga() {
  yield takeEvery(deleteContactRequest.type, deleteDataSaga)
}
